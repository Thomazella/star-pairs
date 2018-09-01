export const reposFrom = user => `users/${user}/repos`;

export const profileOf = user => `users/${user}`;

export const issuesIn = repoFullName =>
  `repos/${repoFullName}/issues?state=all`;

export default {
  reposFrom,
  profileOf,
  issuesIn
};
