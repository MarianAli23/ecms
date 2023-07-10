const { PrismaClient } = require("@prisma/client");

// Create an instance of the Prisma client
const prisma = new PrismaClient();

const employeeComplaintRouter = require("express").Router();

//Posts submitted data into the database
employeeComplaintRouter.post("/", async (req, res) => {
  const body = req.body;
  const prismaResponse = await prisma.complaints.create({
    data: {
      ...body,
    },
  });
  console.log(prismaResponse);
  res.end();
});

//Deletes unwanted info
employeeComplaintRouter.delete("/:id", async (req, res) => {
  const idToDelete = Number(req.params.id);
  const prismaResponse = await prisma.complaints.delete({
    where: { id: idToDelete },
  });
  res.end();
});

module.exports = employeeComplaintRouter;
