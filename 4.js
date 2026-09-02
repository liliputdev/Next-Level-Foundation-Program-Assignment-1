function getCngFare(distance, isNight = false, waitingMinutes = 0) {
    let fare = 50;

    if (distance > 2) {
        let extraDistance = distance - 2;
        let extraFare = extraDistance * 15;

        fare = fare + extraFare;
    }

    let waitingFare = waitingMinutes * 2;

    fare = fare + waitingFare;

    if (isNight) {
        fare = fare + fare * 0.20;
    }

    return fare;
}