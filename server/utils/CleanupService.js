import mongoose from "mongoose";
import Note from "../models/Note.js";
import Bug from "../models/Bug";

const _noteRepository = mongoose.model("Note", Note);
const _bugRepository = mongoose.model("Bug", Bug);

class CleanupService {
  async cleanupAsync() {
    await _noteRepository.deleteMany({ creator: 'D$' })
    await _bugRepository.deleteMany({ creator: 'D$' })
    return { message: "Deleted all test junk!" }
  }
}

const cleanupService = new CleanupService();
export default cleanupService;