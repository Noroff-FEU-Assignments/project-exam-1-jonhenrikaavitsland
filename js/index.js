import { router } from "./router/router.js";
import { handleMenu } from "./ui/menu/handleMenu.js";
import { displayModal } from "./ui/modal/modal.js";

handleMenu();
router();
displayModal();