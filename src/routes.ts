import { Router } from "express";
import { MessagesController } from "./controllers/MessagesControllers";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

/**
 * Tipos de Parâmetros
 * Router params => Parametros de rotas
 * http://localhost:3333/seetings/1
 * Query Params => Filtros e buscas
 * http://localhost:3333/settings/1?search=algumacoisa
 * 
 * Body Params => {
 * 
 * }
 * */

routes.post("/settings", settingsController.create);
routes.get("/settings/:username", settingsController.findByUsername);
routes.put("/settings/:username", settingsController.update);

routes.post("/users", usersController.create);

routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);

export { routes };