import mongoose from "mongoose";
import Bug from "../models/Bug.js";

const _repository = mongoose.model("Bug", Bug);

class BugService {

  async getAll() {
    return await _repository.find({});
  }

  async create(rawData) {
    return await _repository.create(rawData)
  }
  async getById(id) {
    return await _repository.findById(id)
  }
  async edit(id, update) {
    await _repository.findOneAndUpdate({ _id: id }, update, {
      new: true
    })
  }
  async delete(id, update) {
    await _repository.findOneAndUpdate(id, { closed: true }, {
      new: true
    })
  }
}

const bugService = new BugService();
export default bugService;
