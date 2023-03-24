"use strict";

/**
 * `is-admin` policy
 */

module.exports = (policyContext, config, { strapi }) => {
  if (policyContext.state.user?.role === undefined) {
    return false;
  }
  if (policyContext.state.user.role.name === "Admin") {
    return true;
  }
  return false;
};
