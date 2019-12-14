import express from "express";
import bugService from "../services/BugsService";

export default class BugController {
  constructor() {
    this.router = express
      .Router()
      //NOTE  each route gets registered as a .get, .post, .put, or .delete, the first parameter of each method is a string to be concatinated onto the base url registered with the route in main. The second parameter is the method that will be run when this route is hit.
      .get("/bugs", this.getAll)
      .get("/bugs/:id", this.getById)
      .post("/bugs", this.create)
      .put("/bugs/:id", this.editBug)
      .delete("/bugs/:id", this.toggleBug)
  }

  async getAll(req, res, next) {
    try {
      let data = await bugService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      let data = await bugService.create(req.body)
      return res.send(data)
    } catch (error) { next(error) }
  }
  async getById(req, res, next) {
    try {
      let data = await bugService.getById(req.params.id)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async editBug(req, res, next) {
    try {
      let data = await bugService.edit(req.params.id, req.body)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async toggleBug(req, res, next) {
    try {
      let data = await bugService.delete(req.params.id)
      return res.send(data)
    } catch (error) { next(error) }
  }
}
