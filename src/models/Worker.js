import {
  insertWorker,
  updateWorkerById,
  deleteWorkerWithId,
} from "../services/supabase/worker";

class WorkerModel {
  constructor(id, name, age, isMale,phone) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.isMale = isMale;
    this.phone=phone;
  }

  static async insert(name, age, isMale,phone) {
    return await insertWorker(name, age, isMale,phone);
  }

  async update(name, age, isMale,phone) {
    return await updateWorkerById(this.id, name, age, isMale,phone);
  }

  async delete() {
    return await deleteWorkerWithId(this.id);
  }

  static isMaleBooleanFromString(value) {
    return value === "male";
  }
}

export default WorkerModel;
