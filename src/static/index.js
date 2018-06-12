import { GitProcess, GitError, IGitResult } from 'dugite'

async function getStatus(path) {

  const result = await GitProcess.exec([ 'status' ], path)
  if (result.exitCode === 0) {
    const output = result.stdout
    document.getElementById('git-appraisal').innerText = output
  } else {
    const error = result.stderr
    document.getElementById('git-appraisal').innerText = error
  }
}

console.log(getStatus('~/dugite-test'))
