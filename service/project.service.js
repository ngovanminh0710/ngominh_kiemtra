import ProjectModel from "../model/project.model.js";

export const createProject = async(req, res)=>{
    const body = req.body;
    const project = await ProjectModel.create({
        userId  : body.userId,
        skills  : body.skills,
        project  : body.content,
        start  : body.start,
        end  : body.end,
    })
    res.status(201).send({
        data: project,
        status : 'successfull',
        mes : 'project has created completely'
    })
}