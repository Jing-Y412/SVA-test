const { Engine, Render, Runner, World, Bodies, Body, Constraint, Composite, Mouse, MouseConstraint, Composites } = Matter;
const ground = Bodies.rectangle(400, 590, 810, 40, { isStatic: true, render: { fillStyle: "brown" } });
const leftWall = Bodies.rectangle(0, 300, 50, 600, { isStatic: true });
const rightWall = Bodies.rectangle(800, 300, 50, 600, { isStatic: true });


var engine = Engine.create(),
    world = engine.world;

var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: 800,
        height: 600,
        background: "#f4f4f4",
        wireframes: false
    }
});

Render.run(render);

var runner = Runner.create();
Runner.run(runner, engine);

World.add(world, [ground, leftWall, rightWall]);

function createCross(x, y) {
    const vertical = Bodies.rectangle(x, y - 20, 10, 50, {
        render: { fillStyle: null, strokeStyle: "brown", lineWidth: 2 }
    });
    const horizontal = Bodies.rectangle(x, y, 50, 10, {
        render: { fillStyle: null, strokeStyle: "brown", lineWidth: 2 }
    });

    return Body.create({
        parts: [vertical, horizontal],
        friction: 0.5,
        restitution: 0.1
    });
}

const stack = Composites.stack(500, 400, 10, 10, 8, -30, function (x, y) {
    return createCross(x, y);
});

World.add(world, stack);


const ball = Bodies.circle(150, 300, 20, {
    restitution: 1.2,
    density: 0.04,
    render: { fillStyle: "blue" }
});
World.add(world, ball);


const sling = Constraint.create({
    pointA: { x: 150, y: 300 },
    bodyB: ball,
    stiffness: 0.02,
    damping: 0.1,
    render: { visible: true }
});

World.add(world, sling);

var mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            angularStiffness: 0,
            render: {
                visible: false
            }
        }
    });

Composite.add(world, mouseConstraint);

render.mouse = mouse;

Render.lookAt(render, {
    min: { x: 0, y: 0 },
    max: { x: 800, y: 600 }
});