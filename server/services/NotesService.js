import mongoose from "mongoose";
import Note from "../models/Note.js";

const _repository = mongoose.model("Note", Note);

class NoteService {
  async getAll() {
    return await _repository.find({})
  }
  async create(rawData) {
    return await _repository.create(rawData)
  }
  async delete(id) {
    await _repository.findOneAndDelete({ _id: id });
  }
}

const noteService = new NoteService();
export default noteService;