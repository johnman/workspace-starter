import {
	register as registerPlatform,
	deregister as deregisterPlatform,
    toggleNotificationCenter
} from "@openfin/workspace/notifications";
let notificationsRegistered = false;

const providerId = "use-theming";

export async function register() {
	if (!notificationsRegistered) {
        try {
            await registerPlatform({
                id: providerId,
                title: "Theming Platform",
		        icon: "http://localhost:8080/favicon.ico"
            });
            notificationsRegistered = true;
            console.log("Registered notifications");
        } catch (error) {
            console.error("We were unable to register with Notification Center:", error);
        }
	}
}

export async function deregister() {
	if (notificationsRegistered) {
        await deregisterPlatform(providerId);
        console.log("Unregistered platform notifications.");
	}
}

export async function show() {
    return toggleNotificationCenter();
}

export async function hide() {
    return toggleNotificationCenter();
}
