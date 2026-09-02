function getDayType(dayName) {
    let day = dayName.toLowerCase();

    switch (day) {
        case "friday":
            return "Weekend";

        case "saturday":
            return "Weekend";

        case "sunday":
            return "Working Day";

        case "monday":
            return "Working Day";

        case "tuesday":
            return "Working Day";

        case "wednesday":
            return "Working Day";

        case "thursday":
            return "Working Day";

        default:
            return "Invalid Day";
    }
}