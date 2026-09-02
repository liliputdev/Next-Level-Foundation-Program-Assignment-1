function validateUsername(username) {
    if (username.length < 4) {
        return "Too Short";
    }

    if (username.includes(" ")) {
        return "No Space Allowed";
    }

    let newUsername = username.toLowerCase();

    if (newUsername.includes("admin")) {
        return "Reserved Word";
    }

    return "Available";
}