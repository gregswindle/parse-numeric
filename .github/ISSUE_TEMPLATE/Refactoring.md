# <img align="bottom" alt="code" height="30" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.1.3/svg/code.svg"> Refactoring proposal

## 1. Design summary / code smell(s)

> Describe the design issue(s) you have identified. Provide a URL to third-party
> reports—e.g., [Sonar Technical Debt][sonar-tech-debt-url] or [Sonar Code
> Smells][sonar-code-smells-url]—so the team can review the issue.

## 2. Refactoring proposal(s)

> Reference [potential solutions from the refactoring
> catalog][refactoring-catalog-url] that might eliminate technical debt and
> reduce application complexity.

1. Refactoring _a_
2. Refactoring _b_
3. Etc.

## 3. Code quality improvement scores [![Sonar Quality Gate][sonar-alert-status-badge]][sonar-alert-status-url]

- [ ] The refactorings changes have either:

  - **Reduced** _complexity_, _duplications_, _issues_, _security_ issues;
  - **Improved** _maintainability_ or _reliability_; or
  - **Both**.

### Code quality results summary

| Measure             | Scores                                                                                                                                                                                                                                                                                                                |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Quality gate**    | [![Sonar Alert Status Metrics][sonar-alert-status-badge]][sonar-alert-status-url]                                                                                                                                                                                                                                     |
| **Defects** (Bugs)  | [![Sonar Bugs Metrics][sonar-bugs-badge]][sonar-bugs-url]                                                                                                                                                                                                                                                             |
| **Duplications**    | [![Sonar Duplicated Lines Density Metrics][sonar-duplicated-lines-density-badge]][sonar-duplicated-lines-density-url]                                                                                                                                                                                                 |
| **Maintainability** | [![Sonar Code Smells Metrics][sonar-code-smells-badge]][sonar-code-smells-url]<br>[![Sonar Sqale Rating Metrics][sonar-sqale-rating-badge]][sonar-sqale-rating-url]<br>[![Sonar Sqale Index Metrics][sonar-sqale-index-badge]][sonar-sqale-index-url]<br>[![Sonar Ncloc Metrics][sonar-ncloc-badge]][sonar-ncloc-url] |
| **Reliability**     | [![Sonar Reliability Rating Metrics][sonar-reliability-rating-badge]][sonar-reliability-rating-url]                                                                                                                                                                                                                   |
| **Security**        | [![Sonar Security Rating Metrics][sonar-security-rating-badge]][sonar-security-rating-url]<br>[![Sonar Vulnerabilities Metrics][sonar-vulnerabilities-badge]][sonar-vulnerabilities-url]                                                                                                                              |
| **Test coverage**   | [![Sonar Coverage Metrics][sonar-coverage-badge]][sonar-coverage-url]                                                                                                                                                                                                                                                 |

[refactoring-catalog-url]: https://refactoring.com/catalog/

<!-- SonarCloud badge refs -->

[sonar-alert-status-badge]:
  https://sonarcloud.io/api/project_badges/measure?project=parse-numeric-gitlab&metric=alert_status&template=FLAT
[sonar-alert-status-url]:
  https://sonarcloud.io/dashboard?id=parse-numeric-gitlab
[sonar-bugs-badge]:
  https://sonarcloud.io/api/project_badges/measure?project=parse-numeric-gitlab&metric=bugs&template=FLAT
[sonar-bugs-url]: https://sonarcloud.io/dashboard?id=parse-numeric-gitlab
[sonar-code-smells-badge]:
  https://sonarcloud.io/api/project_badges/measure?project=parse-numeric-gitlab&metric=code_smells&template=FLAT
[sonar-code-smells-url]: https://sonarcloud.io/dashboard?id=parse-numeric-gitlab
[sonar-coverage-badge]:
  https://sonarcloud.io/api/project_badges/measure?project=parse-numeric-gitlab&metric=coverage&template=FLAT
[sonar-coverage-url]: https://sonarcloud.io/dashboard?id=parse-numeric-gitlab
[sonar-duplicated-lines-density-badge]:
  https://sonarcloud.io/api/project_badges/measure?project=parse-numeric-gitlab&metric=duplicated_lines_density&template=FLAT
[sonar-duplicated-lines-density-url]:
  https://sonarcloud.io/dashboard?id=parse-numeric-gitlab
[sonar-ncloc-badge]:
  https://sonarcloud.io/api/project_badges/measure?project=parse-numeric-gitlab&metric=ncloc&template=FLAT
[sonar-ncloc-url]: https://sonarcloud.io/dashboard?id=parse-numeric-gitlab
[sonar-reliability-rating-badge]:
  https://sonarcloud.io/api/project_badges/measure?project=parse-numeric-gitlab&metric=reliability_rating&template=FLAT
[sonar-reliability-rating-url]:
  https://sonarcloud.io/dashboard?id=parse-numeric-gitlab
[sonar-security-rating-badge]:
  https://sonarcloud.io/api/project_badges/measure?project=parse-numeric-gitlab&metric=security_rating&template=FLAT
[sonar-security-rating-url]:
  https://sonarcloud.io/dashboard?id=parse-numeric-gitlab
[sonar-sqale-index-badge]:
  https://sonarcloud.io/api/project_badges/measure?project=parse-numeric-gitlab&metric=sqale_index&template=FLAT
[sonar-sqale-index-url]: https://sonarcloud.io/dashboard?id=parse-numeric-gitlab
[sonar-sqale-rating-badge]:
  https://sonarcloud.io/api/project_badges/measure?project=parse-numeric-gitlab&metric=sqale_rating&template=FLAT
[sonar-sqale-rating-url]:
  https://sonarcloud.io/dashboard?id=parse-numeric-gitlab
[sonar-vulnerabilities-badge]:
  https://sonarcloud.io/api/project_badges/measure?project=parse-numeric-gitlab&metric=vulnerabilities&template=FLAT
[sonar-vulnerabilities-url]:
  https://sonarcloud.io/dashboard?id=parse-numeric-gitlab
