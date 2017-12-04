const nodegit = require('simple-git/promise');

async function pull(repoPath, branch) {
	let repo = simpleGit(repoPath);
	let status = await repo.pull('origin', 'master');
	console.log(status)
}

pull('C:/GitRepo/scraper');