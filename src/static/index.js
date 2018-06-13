import { GitProcess, GitError, IGitResult } from 'dugite'
const path = require('path');

async function getStatus(path) {

  const result = await GitProcess.exec([ 'status' ], path)
  if (result.exitCode === 0) {
    const output = result.stdout
    document.getElementById('output').innerText = output
  } else {
    const error = result.stderr
    document.getElementById('output').innerText = error
  }
}

getStatus(path.resolve('../../dugite-test'))
