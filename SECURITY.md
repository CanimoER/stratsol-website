# Security Policy

## Supported Versions

We currently support the following versions of the StratSol website with security updates:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability within our application, please send an email to security@stratsol.com. All security vulnerabilities will be promptly addressed.

Please include the following in your report:
- Type of vulnerability
- Location of the vulnerability
- Steps to reproduce
- Potential impact

## Security Measures

Our project implements the following security measures:

### Dependency Management
- Regular auditing of npm packages using `npm audit`
- Exact versioning for all dependencies to prevent unexpected updates
- Selective script execution during package installation

### Code Security
- Input validation and sanitization for all form submissions
- Error boundaries to prevent complete application crashes
- Content Security Policy (CSP) headers

### Data Protection
- HTTPS enforced for all connections
- Form data sanitized before processing
- Use of environment variables for sensitive configuration

## Update Process

We regularly update our dependencies to patch security vulnerabilities. The process includes:

1. Weekly automated dependency checks
2. Manual review of security advisories
3. Testing updates in development environment before deployment
4. Deployment of security patches within 7 days of discovery

## Third-Party Services

We use the following third-party services, which may have their own security policies:

- React and related libraries
- Tailwind CSS
- Framer Motion

## Security Headers

Our application implements the following security headers:
- Content-Security-Policy
- X-XSS-Protection
- X-Content-Type-Options
- Referrer-Policy
- Permissions-Policy 