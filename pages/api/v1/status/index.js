function status(request, response) {
  response.status(200).json({
    status: "alunos do curso.dev são pessoas acima de média!",
  });
}

export default status;
