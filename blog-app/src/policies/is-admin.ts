/**
 * `is-admin` middleware
 */

import { Strapi } from '@strapi/strapi';


const policy = (policyContext, config, { strapi }) => {
  if (policyContext.state.user?.role === undefined) {
    return false;
  }
  if (policyContext.state.user.role.name === "Admin") {
    return true;
  }

  return false;
};

export default policy;

