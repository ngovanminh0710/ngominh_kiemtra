import mongoose from 'mongoose';
// khởi tạo schema (định nghĩa các field cho các document và kiểu dữ liệu của field đó)

const projectSchema = new mongoose.Schema({
    userId : {type: String , require : true},
    skills: { type: String, require: true },
    project: { type: String, require: true },
    start: { type: String, require: true },
    end: { type: String, require: true },
});
// định nghĩa model cần truyền với phương thức model và các tham số lần lượt: tên collections, schema của document
const ProjectModel = mongoose.model('project', projectSchema);
export default ProjectModel;