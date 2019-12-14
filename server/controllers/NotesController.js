import express from "express";
import noteService from "../services/NotesService";

export default class NoteController {
  constructor() {
    this.router = express.Router()
      .get("/bugs/:id/notes", this.getAll)
      .post("/notes", this.create)
      .delete("/notes/:id", this.delete)
  }
  async getAll(req, res, next) {
    try {
      let data = await noteService.getAll();
      return res.send(data);
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      let data = await noteService.create(req.body)
      return res.send(data)
    } catch (error) { next(error) }
  }
  async delete(req, res, next) {
    try {
      let data = await noteService.delete(req.params.id)
      return res.send("Successfully Deleted");
    } catch (error) { next(error) }
  }
}