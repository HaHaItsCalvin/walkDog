/** 
 * (0) Check if white gate is closed
(0.5) Close gate if opened
(1) Take him out of the pen
(2) Put on his leash
(2.5) Open the white gate & let us out
(3) Determine the route we'll take
(4) Take that route
(5) Open the white gate to let us back in
(6) Close white gate
(7) Take off leash
(8) Put him back in Pen
(9) Pet him, tell him he's a great dog, and "Good night!"
 */

const toggleInCage = dog => {
  return !dog.isInCage;
};

const toggleGate = gate => {
  return !gate.isClosed;
};

const findRoute = () => {
    return "Some Random Route";
}
const runRoute = (dog, route) => {
    let isRunning = dog.isRunning ? dog.isRunning : true;

    return {
        ...dog,
        routeTaken: route,
        isRunning: isRunning
    };
}

const main = () => {
    const gate = {
        isClosed = true,
    };

    const Fawkes = {
        isWalking = false,
        isInCage = true,
    };

    //Check if gate closed; close gate if opened
    gate.isClosed = true ? true : toggleGate(gate); 

    //Take him out of his cage
    Fawkes.isInCage = true ? toggleInCage(Fawkes) : false;

    //Put him on a leash
    dog.onLeash = true;

    //Open gate
    gate.isClosed = true ? toggleGate(gate) : false;

    //Determine route then run route
    const route = findRoute();
    Fawkes = runRoute(Fawkes, route);

    //Finish the run & open gate to let us back in
    Fawkes.isRunning = false;
    gate.isClosed = true ? toggleGate(gate) : false;

    //Close Gate
    gate.isClosed = false ? toggleGate(gate) : false;

    //Take Fawkes off leash
    dog.onLeash = false;

    //Put Fawkes back in cage
    dog.isInCage = false ? toggleInCage(Fawkes): true;
};
