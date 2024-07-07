const Repository = require("../lib/repository");
function BlogController() {}

BlogController.editBlog = async (req, res) => {
	try {
		const post = await Repository.editBlog(req.body, req.params.id);
		res.status(200).send(post);
	} catch (error) {
		res.status(400).send(error.message);
		return;
	}
};

BlogController.getPostById = async (req, res) => {
	try {
		const post = await Repository.getBlogById(req.params.id);
		res.status(200).send(post);
	} catch (error) {
		res.status(400).send(error.message);
		return;
	}
};

BlogController.getAllPost = async (req, res) => {
	try {
		const posts = await Repository.getAllBlog();
		res.status(200).send(posts);
	} catch (error) {
		console.log(error.message);
		return;
	}
};

BlogController.createPost = async (req, res) => {
	try {
		const post = await Repository.createBlog(req.body, req.userData.id);
		res.status(201).send({
			id: post._id,
			description: post.description,
			image: post.image,
		});
	} catch (error) {
		res.status(400).send(error.message);
		return;
	}
};

BlogController.deletePost = async (req, res) => {
	try {
		const post = await Repository.deleteBlog(req.params.id);
		res.status(200).send(post);
	} catch (error) {
		res.status(400).send(error.message);
		return;
	}
};

module.exports = BlogController;

