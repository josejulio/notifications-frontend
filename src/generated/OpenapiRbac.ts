/* eslint-disable */
/**
 * Generated code, DO NOT modify directly.
 */
import { z } from "zod";
import { ValidatedResponse } from "openapi2typescript";
import { Action } from "react-fetching-library";
import { ValidateRule } from "openapi2typescript";
import {
  actionBuilder,
  useWrappedMutation,
  useWrappedParameterizedQuery,
  useWrappedQuery,
  useWrappedRequest,
} from "openapi2typescript-plugin-react-fetching-library";

export module Schemas {
  export const Access = zodSchemaAccess();
  export type Access = {
    permission: string;
    resourceDefinitions: Array<ResourceDefinition>;
  };

  export const AccessPagination = zodSchemaAccessPagination();
  export type AccessPagination = ListPagination & {
    data: Array<Access>;
  };

  export const AdditionalGroup = zodSchemaAdditionalGroup();
  export type AdditionalGroup = {
    description?: string | undefined | null;
    name?: string | undefined | null;
    uuid?: string | undefined | null;
  };

  export const CrossAccountRequest = zodSchemaCrossAccountRequest();
  export type CrossAccountRequest = {
    created?: string | undefined | null;
    endDate?: unknown | undefined | null;
    requestId?: string | undefined | null;
    startDate?: unknown | undefined | null;
    status?: string | undefined | null;
    targetAccount?: string | undefined | null;
    targetOrg?: string | undefined | null;
  };

  export const CrossAccountRequestByAccount =
    zodSchemaCrossAccountRequestByAccount();
  export type CrossAccountRequestByAccount = CrossAccountRequest & {
    email?: string | undefined | null;
    firstName?: string | undefined | null;
    lastName?: string | undefined | null;
  };

  export const CrossAccountRequestByUserId =
    zodSchemaCrossAccountRequestByUserId();
  export type CrossAccountRequestByUserId = CrossAccountRequest & {
    userId?: string | undefined | null;
  };

  export const CrossAccountRequestDetail = zodSchemaCrossAccountRequestDetail();
  export type CrossAccountRequestDetail =
    | CrossAccountRequestDetailByAccount
    | CrossAccountRequestDetailByUseId;

  export const CrossAccountRequestDetailByAccount =
    zodSchemaCrossAccountRequestDetailByAccount();
  export type CrossAccountRequestDetailByAccount =
    CrossAccountRequestWithRoles & {
      email?: unknown | undefined | null;
      firstName?: unknown | undefined | null;
      lastName?: unknown | undefined | null;
    };

  export const CrossAccountRequestDetailByUseId =
    zodSchemaCrossAccountRequestDetailByUseId();
  export type CrossAccountRequestDetailByUseId =
    CrossAccountRequestWithRoles & {
      userId?: unknown | undefined | null;
    };

  export const CrossAccountRequestIn = zodSchemaCrossAccountRequestIn();
  export type CrossAccountRequestIn = {
    endDate: string;
    roles: Array<string>;
    startDate: string;
    targetAccount: string;
    targetOrg?: string | undefined | null;
  };

  export const CrossAccountRequestOut = zodSchemaCrossAccountRequestOut();
  export type CrossAccountRequestOut = CrossAccountRequestWithRoles & {
    userId?: string | undefined | null;
  };

  export const CrossAccountRequestPagination =
    zodSchemaCrossAccountRequestPagination();
  export type CrossAccountRequestPagination = ListPagination & {
    data: Array<CrossAccountRequestByAccount | CrossAccountRequestByUserId>;
  };

  export const CrossAccountRequestPatch = zodSchemaCrossAccountRequestPatch();
  export type CrossAccountRequestPatch = {
    endDate?: string | undefined | null;
    roles?: Array<string> | undefined | null;
    startDate?: string | undefined | null;
    status?:
      | ("pending" | "approved" | "expired" | "cancelled" | "denied")
      | undefined
      | null;
  };

  export const CrossAccountRequestUpdateIn =
    zodSchemaCrossAccountRequestUpdateIn();
  export type CrossAccountRequestUpdateIn = {
    endDate: string;
    roles: Array<string>;
    startDate: string;
  };

  export const CrossAccountRequestWithRoles =
    zodSchemaCrossAccountRequestWithRoles();
  export type CrossAccountRequestWithRoles = {
    created?: string | undefined | null;
    endDate?: string | undefined | null;
    requestId?: string | undefined | null;
    roles?:
      | Array<{
          description?: string | undefined | null;
          displayName?: string | undefined | null;
          permissions?: Array<Permission> | undefined | null;
        }>
      | undefined
      | null;
    startDate?: string | undefined | null;
    status?: string | undefined | null;
    targetAccount?: string | undefined | null;
    targetOrg?: string | undefined | null;
  };

  export const Error = zodSchemaError();
  export type Error = {
    errors: Array<{
      detail?: string | undefined | null;
      status?: string | undefined | null;
    }>;
  };

  export const Error403 = zodSchemaError403();
  export type Error403 = {
    errors: Array<{
      detail?: string | undefined | null;
      source?: string | undefined | null;
      status?: string | undefined | null;
    }>;
  };

  export const Group = zodSchemaGroup();
  export type Group = {
    description?: string | undefined | null;
    name: string;
  };

  export const GroupOut = zodSchemaGroupOut();
  export type GroupOut = Group &
    UUID &
    Timestamped & {
      adminDefault?: boolean | undefined | null;
      platformDefault?: boolean | undefined | null;
      principalCount?: number | undefined | null;
      roleCount?: number | undefined | null;
      system?: boolean | undefined | null;
    };

  export const GroupPagination = zodSchemaGroupPagination();
  export type GroupPagination = ListPagination & {
    data: Array<GroupOut>;
  };

  export const GroupPrincipalIn = zodSchemaGroupPrincipalIn();
  export type GroupPrincipalIn = {
    principals: Array<PrincipalIn>;
  };

  export const GroupRoleIn = zodSchemaGroupRoleIn();
  export type GroupRoleIn = {
    roles: Array<string>;
  };

  export const GroupRolesPagination = zodSchemaGroupRolesPagination();
  export type GroupRolesPagination = ListPagination & {
    data: Array<RoleOut>;
  };

  export const GroupWithPrincipals = zodSchemaGroupWithPrincipals();
  export type GroupWithPrincipals = Group &
    UUID &
    Timestamped & {
      principals: Array<Principal>;
    };

  export const GroupWithPrincipalsAndRoles =
    zodSchemaGroupWithPrincipalsAndRoles();
  export type GroupWithPrincipalsAndRoles = Group &
    UUID &
    Timestamped & {
      principals: Array<Principal>;
      roles: Array<RoleOut>;
    };

  export const ListPagination = zodSchemaListPagination();
  export type ListPagination = {
    links?: PaginationLinks | undefined | null;
    meta?: PaginationMeta | undefined | null;
  };

  export const PaginationLinks = zodSchemaPaginationLinks();
  export type PaginationLinks = {
    first?: string | undefined | null;
    last?: string | undefined | null;
    next?: string | undefined | null;
    previous?: string | undefined | null;
  };

  export const PaginationMeta = zodSchemaPaginationMeta();
  export type PaginationMeta = {
    count?: number | undefined | null;
  };

  export const Permission = zodSchemaPermission();
  export type Permission = {
    application?: string | undefined | null;
    description?: string | undefined | null;
    permission?: string | undefined | null;
    resourceType?: string | undefined | null;
    verb?: string | undefined | null;
  };

  export const PermissionOptionsPagination =
    zodSchemaPermissionOptionsPagination();
  export type PermissionOptionsPagination = ListPagination & {
    data: Array<string>;
  };

  export const PermissionPagination = zodSchemaPermissionPagination();
  export type PermissionPagination = ListPagination & {
    data: Array<Permission>;
  };

  export const Policy = zodSchemaPolicy();
  export type Policy = {
    description?: string | undefined | null;
    name: string;
  };

  export const PolicyExtended = zodSchemaPolicyExtended();
  export type PolicyExtended = Policy &
    UUID &
    Timestamped & {
      group: GroupOut;
      roles: Array<RoleOut>;
    };

  export const PolicyIn = zodSchemaPolicyIn();
  export type PolicyIn = Policy & {
    group: string;
    roles: Array<string>;
  };

  export const PolicyPagination = zodSchemaPolicyPagination();
  export type PolicyPagination = ListPagination & {
    data: Array<PolicyExtended>;
  };

  export const Principal = zodSchemaPrincipal();
  export type Principal = {
    email: string;
    firstName?: string | undefined | null;
    isActive?: boolean | undefined | null;
    isOrgAdmin?: boolean | undefined | null;
    lastName?: string | undefined | null;
    username: string;
  };

  export const PrincipalIn = zodSchemaPrincipalIn();
  export type PrincipalIn = {
    username: string;
  };

  export const PrincipalOut = zodSchemaPrincipalOut();
  export type PrincipalOut = Principal & UUID;

  export const PrincipalPagination = zodSchemaPrincipalPagination();
  export type PrincipalPagination = ListPagination & {
    data: Array<Principal>;
  };

  export const ResourceDefinition = zodSchemaResourceDefinition();
  export type ResourceDefinition = {
    attributeFilter: ResourceDefinitionFilter;
  };

  export const ResourceDefinitionFilter = zodSchemaResourceDefinitionFilter();
  export type ResourceDefinitionFilter = {
    key: string;
    operation: "equal" | "in";
    value: string;
  };

  export const Role = zodSchemaRole();
  export type Role = {
    description?: string | undefined | null;
    displayName?: string | undefined | null;
    name: string;
  };

  export const RoleIn = zodSchemaRoleIn();
  export type RoleIn = Role & {
    access: Array<Access>;
  };

  export const RoleOut = zodSchemaRoleOut();
  export type RoleOut = Role &
    UUID &
    Timestamped & {
      accessCount?: number | undefined | null;
      adminDefault?: boolean | undefined | null;
      applications?: Array<string> | undefined | null;
      platformDefault?: boolean | undefined | null;
      policyCount?: number | undefined | null;
      system?: boolean | undefined | null;
    };

  export const RoleOutDynamic = zodSchemaRoleOutDynamic();
  export type RoleOutDynamic = Role &
    UUID &
    Timestamped & {
      accessCount: number;
      adminDefault: boolean;
      applications: Array<string>;
      groupsIn?: Array<AdditionalGroup> | undefined | null;
      groupsInCount?: number | undefined | null;
      platformDefault: boolean;
      policyCount: number;
      system: boolean;
    };

  export const RolePagination = zodSchemaRolePagination();
  export type RolePagination = ListPagination & {
    data: Array<RoleOut>;
  };

  export const RolePaginationDynamic = zodSchemaRolePaginationDynamic();
  export type RolePaginationDynamic = ListPagination & {
    data: Array<RoleOutDynamic>;
  };

  export const RolePatch = zodSchemaRolePatch();
  export type RolePatch = {
    description?: string | undefined | null;
    displayName?: string | undefined | null;
    name?: string | undefined | null;
  };

  export const RoleWithAccess = zodSchemaRoleWithAccess();
  export type RoleWithAccess = RoleOut & {
    access: Array<Access>;
  };

  export const Status = zodSchemaStatus();
  export type Status = {
    apiVersion: number;
    commit?: string | undefined | null;
  };

  export const Timestamped = zodSchemaTimestamped();
  export type Timestamped = {
    created: string;
    modified: string;
  };

  export const UUID = zodSchemaUUID();
  export type UUID = {
    uuid: string;
  };

  export const __Empty = zodSchema__Empty();
  export type __Empty = string | undefined;

  function zodSchemaAccess() {
    return z
      .object({
        permission: z.string(),
        resourceDefinitions: z.array(zodSchemaResourceDefinition()),
      })
      .nonstrict()
      .transform((o) => ({
        permission: o.permission,
        resourceDefinitions: o.resourceDefinitions,
      }));
  }

  function zodSchemaAccessPagination() {
    return z.intersection(
      zodSchemaListPagination(),
      z
        .object({
          data: z.array(zodSchemaAccess()),
        })
        .nonstrict()
        .transform((o) => ({
          data: o.data,
        }))
    );
  }

  function zodSchemaAdditionalGroup() {
    return z
      .object({
        description: z.string().optional().nullable(),
        name: z.string().optional().nullable(),
        uuid: z.string().optional().nullable(),
      })
      .nonstrict()
      .transform((o) => ({
        description: o.description,
        name: o.name,
        uuid: o.uuid,
      }));
  }

  function zodSchemaCrossAccountRequest() {
    return z
      .object({
        created: z.string().optional().nullable(),
        end_date: z.unknown().optional().nullable(),
        request_id: z.string().optional().nullable(),
        start_date: z.unknown().optional().nullable(),
        status: z.string().optional().nullable(),
        target_account: z.string().optional().nullable(),
        target_org: z.string().optional().nullable(),
      })
      .nonstrict()
      .transform((o) => ({
        created: o.created,
        endDate: o.end_date,
        requestId: o.request_id,
        startDate: o.start_date,
        status: o.status,
        targetAccount: o.target_account,
        targetOrg: o.target_org,
      }));
  }

  function zodSchemaCrossAccountRequestByAccount() {
    return z.intersection(
      zodSchemaCrossAccountRequest(),
      z
        .object({
          email: z.string().optional().nullable(),
          first_name: z.string().optional().nullable(),
          last_name: z.string().optional().nullable(),
        })
        .nonstrict()
        .transform((o) => ({
          email: o.email,
          firstName: o.first_name,
          lastName: o.last_name,
        }))
    );
  }

  function zodSchemaCrossAccountRequestByUserId() {
    return z.intersection(
      zodSchemaCrossAccountRequest(),
      z
        .object({
          user_id: z.string().optional().nullable(),
        })
        .nonstrict()
        .transform((o) => ({
          userId: o.user_id,
        }))
    );
  }

  function zodSchemaCrossAccountRequestDetail() {
    return z.union([
      zodSchemaCrossAccountRequestDetailByAccount(),
      zodSchemaCrossAccountRequestDetailByUseId(),
    ]);
  }

  function zodSchemaCrossAccountRequestDetailByAccount() {
    return z.intersection(
      zodSchemaCrossAccountRequestWithRoles(),
      z
        .object({
          email: z.unknown().optional().nullable(),
          first_name: z.unknown().optional().nullable(),
          last_name: z.unknown().optional().nullable(),
        })
        .nonstrict()
        .transform((o) => ({
          email: o.email,
          firstName: o.first_name,
          lastName: o.last_name,
        }))
    );
  }

  function zodSchemaCrossAccountRequestDetailByUseId() {
    return z.intersection(
      zodSchemaCrossAccountRequestWithRoles(),
      z
        .object({
          user_id: z.unknown().optional().nullable(),
        })
        .nonstrict()
        .transform((o) => ({
          userId: o.user_id,
        }))
    );
  }

  function zodSchemaCrossAccountRequestIn() {
    return z
      .object({
        end_date: z.string(),
        roles: z.array(z.string()),
        start_date: z.string(),
        target_account: z.string(),
        target_org: z.string().optional().nullable(),
      })
      .nonstrict()
      .transform((o) => ({
        endDate: o.end_date,
        roles: o.roles,
        startDate: o.start_date,
        targetAccount: o.target_account,
        targetOrg: o.target_org,
      }));
  }

  function zodSchemaCrossAccountRequestOut() {
    return z.intersection(
      zodSchemaCrossAccountRequestWithRoles(),
      z
        .object({
          user_id: z.string().optional().nullable(),
        })
        .nonstrict()
        .transform((o) => ({
          userId: o.user_id,
        }))
    );
  }

  function zodSchemaCrossAccountRequestPagination() {
    return z.intersection(
      zodSchemaListPagination(),
      z
        .object({
          data: z.array(
            z.union([
              zodSchemaCrossAccountRequestByAccount(),
              zodSchemaCrossAccountRequestByUserId(),
            ])
          ),
        })
        .nonstrict()
        .transform((o) => ({
          data: o.data,
        }))
    );
  }

  function zodSchemaCrossAccountRequestPatch() {
    return z
      .object({
        end_date: z.string().optional().nullable(),
        roles: z.array(z.string()).optional().nullable(),
        start_date: z.string().optional().nullable(),
        status: z
          .enum(["pending", "approved", "expired", "cancelled", "denied"])
          .optional()
          .nullable(),
      })
      .nonstrict()
      .transform((o) => ({
        endDate: o.end_date,
        roles: o.roles,
        startDate: o.start_date,
        status: o.status,
      }));
  }

  function zodSchemaCrossAccountRequestUpdateIn() {
    return z
      .object({
        end_date: z.string(),
        roles: z.array(z.string()),
        start_date: z.string(),
      })
      .nonstrict()
      .transform((o) => ({
        endDate: o.end_date,
        roles: o.roles,
        startDate: o.start_date,
      }));
  }

  function zodSchemaCrossAccountRequestWithRoles() {
    return z
      .object({
        created: z.string().optional().nullable(),
        end_date: z.string().optional().nullable(),
        request_id: z.string().optional().nullable(),
        roles: z
          .array(
            z
              .object({
                description: z.string().optional().nullable(),
                display_name: z.string().optional().nullable(),
                permissions: z
                  .array(zodSchemaPermission())
                  .optional()
                  .nullable(),
              })
              .nonstrict()
              .transform((o) => ({
                description: o.description,
                displayName: o.display_name,
                permissions: o.permissions,
              }))
          )
          .optional()
          .nullable(),
        start_date: z.string().optional().nullable(),
        status: z.string().optional().nullable(),
        target_account: z.string().optional().nullable(),
        target_org: z.string().optional().nullable(),
      })
      .nonstrict()
      .transform((o) => ({
        created: o.created,
        endDate: o.end_date,
        requestId: o.request_id,
        roles: o.roles,
        startDate: o.start_date,
        status: o.status,
        targetAccount: o.target_account,
        targetOrg: o.target_org,
      }));
  }

  function zodSchemaError() {
    return z
      .object({
        errors: z.array(
          z
            .object({
              detail: z.string().optional().nullable(),
              status: z.string().optional().nullable(),
            })
            .nonstrict()
            .transform((o) => ({
              detail: o.detail,
              status: o.status,
            }))
        ),
      })
      .nonstrict()
      .transform((o) => ({
        errors: o.errors,
      }));
  }

  function zodSchemaError403() {
    return z
      .object({
        errors: z.array(
          z
            .object({
              detail: z.string().optional().nullable(),
              source: z.string().optional().nullable(),
              status: z.string().optional().nullable(),
            })
            .nonstrict()
            .transform((o) => ({
              detail: o.detail,
              source: o.source,
              status: o.status,
            }))
        ),
      })
      .nonstrict()
      .transform((o) => ({
        errors: o.errors,
      }));
  }

  function zodSchemaGroup() {
    return z
      .object({
        description: z.string().optional().nullable(),
        name: z.string(),
      })
      .nonstrict()
      .transform((o) => ({
        description: o.description,
        name: o.name,
      }));
  }

  function zodSchemaGroupOut() {
    return z.intersection(
      zodSchemaGroup(),
      z.intersection(
        zodSchemaUUID(),
        z.intersection(
          zodSchemaTimestamped(),
          z
            .object({
              admin_default: z.boolean().optional().nullable(),
              platform_default: z.boolean().optional().nullable(),
              principalCount: z.number().int().optional().nullable(),
              roleCount: z.number().int().optional().nullable(),
              system: z.boolean().optional().nullable(),
            })
            .nonstrict()
            .transform((o) => ({
              adminDefault: o.admin_default,
              platformDefault: o.platform_default,
              principalCount: o.principalCount,
              roleCount: o.roleCount,
              system: o.system,
            }))
        )
      )
    );
  }

  function zodSchemaGroupPagination() {
    return z.intersection(
      zodSchemaListPagination(),
      z
        .object({
          data: z.array(zodSchemaGroupOut()),
        })
        .nonstrict()
        .transform((o) => ({
          data: o.data,
        }))
    );
  }

  function zodSchemaGroupPrincipalIn() {
    return z
      .object({
        principals: z.array(zodSchemaPrincipalIn()),
      })
      .nonstrict()
      .transform((o) => ({
        principals: o.principals,
      }));
  }

  function zodSchemaGroupRoleIn() {
    return z
      .object({
        roles: z.array(z.string()),
      })
      .nonstrict()
      .transform((o) => ({
        roles: o.roles,
      }));
  }

  function zodSchemaGroupRolesPagination() {
    return z.intersection(
      zodSchemaListPagination(),
      z
        .object({
          data: z.array(zodSchemaRoleOut()),
        })
        .nonstrict()
        .transform((o) => ({
          data: o.data,
        }))
    );
  }

  function zodSchemaGroupWithPrincipals() {
    return z.intersection(
      zodSchemaGroup(),
      z.intersection(
        zodSchemaUUID(),
        z.intersection(
          zodSchemaTimestamped(),
          z
            .object({
              principals: z.array(zodSchemaPrincipal()),
            })
            .nonstrict()
            .transform((o) => ({
              principals: o.principals,
            }))
        )
      )
    );
  }

  function zodSchemaGroupWithPrincipalsAndRoles() {
    return z.intersection(
      zodSchemaGroup(),
      z.intersection(
        zodSchemaUUID(),
        z.intersection(
          zodSchemaTimestamped(),
          z
            .object({
              principals: z.array(zodSchemaPrincipal()),
              roles: z.array(zodSchemaRoleOut()),
            })
            .nonstrict()
            .transform((o) => ({
              principals: o.principals,
              roles: o.roles,
            }))
        )
      )
    );
  }

  function zodSchemaListPagination() {
    return z
      .object({
        links: zodSchemaPaginationLinks().optional().nullable(),
        meta: zodSchemaPaginationMeta().optional().nullable(),
      })
      .nonstrict()
      .transform((o) => ({
        links: o.links,
        meta: o.meta,
      }));
  }

  function zodSchemaPaginationLinks() {
    return z
      .object({
        first: z.string().optional().nullable(),
        last: z.string().optional().nullable(),
        next: z.string().optional().nullable(),
        previous: z.string().optional().nullable(),
      })
      .nonstrict()
      .transform((o) => ({
        first: o.first,
        last: o.last,
        next: o.next,
        previous: o.previous,
      }));
  }

  function zodSchemaPaginationMeta() {
    return z
      .object({
        count: z.number().int().optional().nullable(),
      })
      .nonstrict()
      .transform((o) => ({
        count: o.count,
      }));
  }

  function zodSchemaPermission() {
    return z
      .object({
        application: z.string().optional().nullable(),
        description: z.string().optional().nullable(),
        permission: z.string().optional().nullable(),
        resource_type: z.string().optional().nullable(),
        verb: z.string().optional().nullable(),
      })
      .nonstrict()
      .transform((o) => ({
        application: o.application,
        description: o.description,
        permission: o.permission,
        resourceType: o.resource_type,
        verb: o.verb,
      }));
  }

  function zodSchemaPermissionOptionsPagination() {
    return z.intersection(
      zodSchemaListPagination(),
      z
        .object({
          data: z.array(z.string()),
        })
        .nonstrict()
        .transform((o) => ({
          data: o.data,
        }))
    );
  }

  function zodSchemaPermissionPagination() {
    return z.intersection(
      zodSchemaListPagination(),
      z
        .object({
          data: z.array(zodSchemaPermission()),
        })
        .nonstrict()
        .transform((o) => ({
          data: o.data,
        }))
    );
  }

  function zodSchemaPolicy() {
    return z
      .object({
        description: z.string().optional().nullable(),
        name: z.string(),
      })
      .nonstrict()
      .transform((o) => ({
        description: o.description,
        name: o.name,
      }));
  }

  function zodSchemaPolicyExtended() {
    return z.intersection(
      zodSchemaPolicy(),
      z.intersection(
        zodSchemaUUID(),
        z.intersection(
          zodSchemaTimestamped(),
          z
            .object({
              group: zodSchemaGroupOut(),
              roles: z.array(zodSchemaRoleOut()),
            })
            .nonstrict()
            .transform((o) => ({
              group: o.group,
              roles: o.roles,
            }))
        )
      )
    );
  }

  function zodSchemaPolicyIn() {
    return z.intersection(
      zodSchemaPolicy(),
      z
        .object({
          group: z.string(),
          roles: z.array(z.string()),
        })
        .nonstrict()
        .transform((o) => ({
          group: o.group,
          roles: o.roles,
        }))
    );
  }

  function zodSchemaPolicyPagination() {
    return z.intersection(
      zodSchemaListPagination(),
      z
        .object({
          data: z.array(zodSchemaPolicyExtended()),
        })
        .nonstrict()
        .transform((o) => ({
          data: o.data,
        }))
    );
  }

  function zodSchemaPrincipal() {
    return z
      .object({
        email: z.string(),
        first_name: z.string().optional().nullable(),
        is_active: z.boolean().optional().nullable(),
        is_org_admin: z.boolean().optional().nullable(),
        last_name: z.string().optional().nullable(),
        username: z.string(),
      })
      .nonstrict()
      .transform((o) => ({
        email: o.email,
        firstName: o.first_name,
        isActive: o.is_active,
        isOrgAdmin: o.is_org_admin,
        lastName: o.last_name,
        username: o.username,
      }));
  }

  function zodSchemaPrincipalIn() {
    return z
      .object({
        username: z.string(),
      })
      .nonstrict()
      .transform((o) => ({
        username: o.username,
      }));
  }

  function zodSchemaPrincipalOut() {
    return z.intersection(zodSchemaPrincipal(), zodSchemaUUID());
  }

  function zodSchemaPrincipalPagination() {
    return z.intersection(
      zodSchemaListPagination(),
      z
        .object({
          data: z.array(zodSchemaPrincipal()),
        })
        .nonstrict()
        .transform((o) => ({
          data: o.data,
        }))
    );
  }

  function zodSchemaResourceDefinition() {
    return z
      .object({
        attributeFilter: zodSchemaResourceDefinitionFilter(),
      })
      .nonstrict()
      .transform((o) => ({
        attributeFilter: o.attributeFilter,
      }));
  }

  function zodSchemaResourceDefinitionFilter() {
    return z
      .object({
        key: z.string(),
        operation: z.enum(["equal", "in"]),
        value: z.string(),
      })
      .nonstrict()
      .transform((o) => ({
        key: o.key,
        operation: o.operation,
        value: o.value,
      }));
  }

  function zodSchemaRole() {
    return z
      .object({
        description: z.string().optional().nullable(),
        display_name: z.string().optional().nullable(),
        name: z.string(),
      })
      .nonstrict()
      .transform((o) => ({
        description: o.description,
        displayName: o.display_name,
        name: o.name,
      }));
  }

  function zodSchemaRoleIn() {
    return z.intersection(
      zodSchemaRole(),
      z
        .object({
          access: z.array(zodSchemaAccess()),
        })
        .nonstrict()
        .transform((o) => ({
          access: o.access,
        }))
    );
  }

  function zodSchemaRoleOut() {
    return z.intersection(
      zodSchemaRole(),
      z.intersection(
        zodSchemaUUID(),
        z.intersection(
          zodSchemaTimestamped(),
          z
            .object({
              accessCount: z.number().int().optional().nullable(),
              admin_default: z.boolean().optional().nullable(),
              applications: z.array(z.string()).optional().nullable(),
              platform_default: z.boolean().optional().nullable(),
              policyCount: z.number().int().optional().nullable(),
              system: z.boolean().optional().nullable(),
            })
            .nonstrict()
            .transform((o) => ({
              accessCount: o.accessCount,
              adminDefault: o.admin_default,
              applications: o.applications,
              platformDefault: o.platform_default,
              policyCount: o.policyCount,
              system: o.system,
            }))
        )
      )
    );
  }

  function zodSchemaRoleOutDynamic() {
    return z.intersection(
      zodSchemaRole(),
      z.intersection(
        zodSchemaUUID(),
        z.intersection(
          zodSchemaTimestamped(),
          z
            .object({
              accessCount: z.number().int(),
              admin_default: z.boolean(),
              applications: z.array(z.string()),
              groups_in: z
                .array(zodSchemaAdditionalGroup())
                .optional()
                .nullable(),
              groups_in_count: z.number().int().optional().nullable(),
              platform_default: z.boolean(),
              policyCount: z.number().int(),
              system: z.boolean(),
            })
            .nonstrict()
            .transform((o) => ({
              accessCount: o.accessCount,
              adminDefault: o.admin_default,
              applications: o.applications,
              groupsIn: o.groups_in,
              groupsInCount: o.groups_in_count,
              platformDefault: o.platform_default,
              policyCount: o.policyCount,
              system: o.system,
            }))
        )
      )
    );
  }

  function zodSchemaRolePagination() {
    return z.intersection(
      zodSchemaListPagination(),
      z
        .object({
          data: z.array(zodSchemaRoleOut()),
        })
        .nonstrict()
        .transform((o) => ({
          data: o.data,
        }))
    );
  }

  function zodSchemaRolePaginationDynamic() {
    return z.intersection(
      zodSchemaListPagination(),
      z
        .object({
          data: z.array(zodSchemaRoleOutDynamic()),
        })
        .nonstrict()
        .transform((o) => ({
          data: o.data,
        }))
    );
  }

  function zodSchemaRolePatch() {
    return z
      .object({
        description: z.string().optional().nullable(),
        display_name: z.string().optional().nullable(),
        name: z.string().optional().nullable(),
      })
      .nonstrict()
      .transform((o) => ({
        description: o.description,
        displayName: o.display_name,
        name: o.name,
      }));
  }

  function zodSchemaRoleWithAccess() {
    return z.intersection(
      zodSchemaRoleOut(),
      z
        .object({
          access: z.array(zodSchemaAccess()),
        })
        .nonstrict()
        .transform((o) => ({
          access: o.access,
        }))
    );
  }

  function zodSchemaStatus() {
    return z
      .object({
        api_version: z.number().int(),
        commit: z.string().optional().nullable(),
      })
      .nonstrict()
      .transform((o) => ({
        apiVersion: o.api_version,
        commit: o.commit,
      }));
  }

  function zodSchemaTimestamped() {
    return z
      .object({
        created: z.string(),
        modified: z.string(),
      })
      .nonstrict()
      .transform((o) => ({
        created: o.created,
        modified: o.modified,
      }));
  }

  function zodSchemaUUID() {
    return z
      .object({
        uuid: z.string(),
      })
      .nonstrict()
      .transform((o) => ({
        uuid: o.uuid,
      }));
  }

  function zodSchema__Empty() {
    return z.string().max(0).optional();
  }
}

export module Operations {
  export module GetPrincipalAccess {
    const Application = z.string();
    type Application = string;
    const Username = z.string();
    type Username = string;
    const OrderBy = z.enum(["application", "resource_type", "verb"]);
    type OrderBy = "application" | "resource_type" | "verb";
    const Limit = z.number().int();
    type Limit = number;
    const Offset = z.number().int();
    type Offset = number;
    export interface Params {
      application: Application;
      username?: Username;
      orderBy?: OrderBy;
      limit?: Limit;
      offset?: Offset;
    }

    export type Payload =
      | ValidatedResponse<"AccessPagination", 200, Schemas.AccessPagination>
      | ValidatedResponse<"__Empty", 401, Schemas.__Empty>
      | ValidatedResponse<"Error", 404, Schemas.Error>
      | ValidatedResponse<"Error", 500, Schemas.Error>
      | ValidatedResponse<"unknown", undefined, unknown>;
  }
  export module ListCrossAccountRequests {
    const Limit = z.number().int();
    type Limit = number;
    const Offset = z.number().int();
    type Offset = number;
    const QueryBy = z.enum(["user_id", "target_account"]);
    type QueryBy = "user_id" | "target_account";
    const Account = z.string();
    type Account = string;
    const ApprovedOnly = z.enum(["true"]);
    type ApprovedOnly = "true";
    const Status = z.enum([
      "pending",
      "approved",
      "denied",
      "cancelled",
      "expired",
    ]);
    type Status = "pending" | "approved" | "denied" | "cancelled" | "expired";
    const OrderBy = z.enum([
      "request_id",
      "start_date",
      "end_date",
      "created",
      "modified",
      "status",
    ]);
    type OrderBy =
      | "request_id"
      | "start_date"
      | "end_date"
      | "created"
      | "modified"
      | "status";
    export interface Params {
      limit?: Limit;
      offset?: Offset;
      queryBy?: QueryBy;
      account?: Account;
      approvedOnly?: ApprovedOnly;
      status?: Status;
      orderBy?: OrderBy;
    }

    export type Payload =
      | ValidatedResponse<
          "CrossAccountRequestPagination",
          200,
          Schemas.CrossAccountRequestPagination
        >
      | ValidatedResponse<"__Empty", 401, Schemas.__Empty>
      | ValidatedResponse<"Error403", 403, Schemas.Error403>
      | ValidatedResponse<"Error", 500, Schemas.Error>
      | ValidatedResponse<"unknown", undefined, unknown>;
  }
  export module CreateCrossAccountRequests {
    export interface Params {
      body: Schemas.CrossAccountRequestIn;
    }

    export type Payload =
      | ValidatedResponse<
          "CrossAccountRequestOut",
          201,
          Schemas.CrossAccountRequestOut
        >
      | ValidatedResponse<"__Empty", 401, Schemas.__Empty>
      | ValidatedResponse<"Error403", 403, Schemas.Error403>
      | ValidatedResponse<"Error", 500, Schemas.Error>
      | ValidatedResponse<"unknown", undefined, unknown>;
  }
  export module GetCrossAccountRequest {
    const Uuid = z.string();
    type Uuid = string;
    const QueryBy = z.enum(["user_id", "target_account"]);
    type QueryBy = "user_id" | "target_account";
    const Account = z.string();
    type Account = string;
    const ApprovedOnly = z.enum(["true"]);
    type ApprovedOnly = "true";
    export interface Params {
      uuid: Uuid;
      queryBy?: QueryBy;
      account?: Account;
      approvedOnly?: ApprovedOnly;
    }

    export type Payload =
      | ValidatedResponse<
          "CrossAccountRequestDetail",
          200,
          Schemas.CrossAccountRequestDetail
        >
      | ValidatedResponse<"__Empty", 401, Schemas.__Empty>
      | ValidatedResponse<"Error403", 403, Schemas.Error403>
      | ValidatedResponse<"Error", 404, Schemas.Error>
      | ValidatedResponse<"Error", 500, Schemas.Error>
      | ValidatedResponse<"unknown", undefined, unknown>;
  }
  export module PutCrossAccountRequest {
    const Uuid = z.string();
    type Uuid = string;
    export interface Params {
      uuid: Uuid;
      body: Schemas.CrossAccountRequestUpdateIn;
    }

    export type Payload =
      | ValidatedResponse<
          "CrossAccountRequestDetail",
          200,
          Schemas.CrossAccountRequestDetail
        >
      | ValidatedResponse<
          "CrossAccountRequestOut",
          201,
          Schemas.CrossAccountRequestOut
        >
      | ValidatedResponse<"__Empty", 401, Schemas.__Empty>
      | ValidatedResponse<"Error403", 403, Schemas.Error403>
      | ValidatedResponse<"Error", 404, Schemas.Error>
      | ValidatedResponse<"Error", 500, Schemas.Error>
      | ValidatedResponse<"unknown", undefined, unknown>;
  }
  export module ListGroups {
    const Limit = z.number().int();
    type Limit = number;
    const Offset = z.number().int();
    type Offset = number;
    const Name = z.string();
    type Name = string;
    const NameMatch = z.enum(["partial", "exact"]);
    type NameMatch = "partial" | "exact";
    const Scope = z.enum(["account", "principal"]);
    type Scope = "account" | "principal";
    const Username = z.string();
    type Username = string;
    const Uuid = z.array(z.string());
    type Uuid = Array<string>;
    const RoleNames = z.array(z.string());
    type RoleNames = Array<string>;
    const RoleDiscriminator = z.enum(["all", "any"]);
    type RoleDiscriminator = "all" | "any";
    const OrderBy = z.enum([
      "name",
      "modified",
      "principalCount",
      "policyCount",
    ]);
    type OrderBy = "name" | "modified" | "principalCount" | "policyCount";
    const PlatformDefault = z.boolean();
    type PlatformDefault = boolean;
    const AdminDefault = z.boolean();
    type AdminDefault = boolean;
    const System = z.boolean();
    type System = boolean;
    export interface Params {
      limit?: Limit;
      offset?: Offset;
      name?: Name;
      nameMatch?: NameMatch;
      scope?: Scope;
      username?: Username;
      uuid?: Uuid;
      roleNames?: RoleNames;
      roleDiscriminator?: RoleDiscriminator;
      orderBy?: OrderBy;
      platformDefault?: PlatformDefault;
      adminDefault?: AdminDefault;
      system?: System;
    }

    export type Payload =
      | ValidatedResponse<"GroupPagination", 200, Schemas.GroupPagination>
      | ValidatedResponse<"__Empty", 401, Schemas.__Empty>
      | ValidatedResponse<"Error403", 403, Schemas.Error403>
      | ValidatedResponse<"Error", 500, Schemas.Error>
      | ValidatedResponse<"unknown", undefined, unknown>;
  }
  export module CreateGroup {
    export interface Params {
      body: Schemas.Group;
    }

    export type Payload =
      | ValidatedResponse<"GroupOut", 201, Schemas.GroupOut>
      | ValidatedResponse<"__Empty", 401, Schemas.__Empty>
      | ValidatedResponse<"Error403", 403, Schemas.Error403>
      | ValidatedResponse<"Error", 500, Schemas.Error>
      | ValidatedResponse<"unknown", undefined, unknown>;
  }
  export module GetGroup {
    const Uuid = z.string();
    type Uuid = string;
    export interface Params {
      uuid: Uuid;
    }

    export type Payload =
      | ValidatedResponse<
          "GroupWithPrincipalsAndRoles",
          200,
          Schemas.GroupWithPrincipalsAndRoles
        >
      | ValidatedResponse<"__Empty", 401, Schemas.__Empty>
      | ValidatedResponse<"Error403", 403, Schemas.Error403>
      | ValidatedResponse<"Error", 404, Schemas.Error>
      | ValidatedResponse<"Error", 500, Schemas.Error>
      | ValidatedResponse<"unknown", undefined, unknown>;
  }
  export module UpdateGroup {
    const Uuid = z.string();
    type Uuid = string;
    export interface Params {
      uuid: Uuid;
      body: Schemas.Group;
    }

    export type Payload =
      | ValidatedResponse<"GroupOut", 200, Schemas.GroupOut>
      | ValidatedResponse<"__Empty", 401, Schemas.__Empty>
      | ValidatedResponse<"Error403", 403, Schemas.Error403>
      | ValidatedResponse<"Error", 404, Schemas.Error>
      | ValidatedResponse<"Error", 500, Schemas.Error>
      | ValidatedResponse<"unknown", undefined, unknown>;
  }
  export module DeleteGroup {
    const Uuid = z.string();
    type Uuid = string;
    export interface Params {
      uuid: Uuid;
    }

    export type Payload =
      | ValidatedResponse<"__Empty", 204, Schemas.__Empty>
      | ValidatedResponse<"__Empty", 401, Schemas.__Empty>
      | ValidatedResponse<"Error403", 403, Schemas.Error403>
      | ValidatedResponse<"Error", 404, Schemas.Error>
      | ValidatedResponse<"Error", 500, Schemas.Error>
      | ValidatedResponse<"unknown", undefined, unknown>;
  }
  export module GetPrincipalsFromGroup {
    const Uuid = z.string();
    type Uuid = string;
    const PrincipalUsername = z.string();
    type PrincipalUsername = string;
    const Limit = z.number().int();
    type Limit = number;
    const Offset = z.number().int();
    type Offset = number;
    const OrderBy = z.enum(["username"]);
    type OrderBy = "username";
    export interface Params {
      uuid: Uuid;
      principalUsername?: PrincipalUsername;
      limit?: Limit;
      offset?: Offset;
      orderBy?: OrderBy;
    }

    export type Payload =
      | ValidatedResponse<
          "PrincipalPagination",
          200,
          Schemas.PrincipalPagination
        >
      | ValidatedResponse<"__Empty", 400, Schemas.__Empty>
      | ValidatedResponse<"__Empty", 401, Schemas.__Empty>
      | ValidatedResponse<"Error", 404, Schemas.Error>
      | ValidatedResponse<"Error", 500, Schemas.Error>
      | ValidatedResponse<"unknown", undefined, unknown>;
  }
  export module AddPrincipalToGroup {
    const Uuid = z.string();
    type Uuid = string;
    export interface Params {
      uuid: Uuid;
      body: Schemas.GroupPrincipalIn;
    }

    export type Payload =
      | ValidatedResponse<
          "GroupWithPrincipalsAndRoles",
          200,
          Schemas.GroupWithPrincipalsAndRoles
        >
      | ValidatedResponse<"__Empty", 400, Schemas.__Empty>
      | ValidatedResponse<"__Empty", 401, Schemas.__Empty>
      | ValidatedResponse<"Error403", 403, Schemas.Error403>
      | ValidatedResponse<"Error", 404, Schemas.Error>
      | ValidatedResponse<"Error", 500, Schemas.Error>
      | ValidatedResponse<"unknown", undefined, unknown>;
  }
  export module DeletePrincipalFromGroup {
    const Uuid = z.string();
    type Uuid = string;
    const Usernames = z.string();
    type Usernames = string;
    export interface Params {
      uuid: Uuid;
      usernames: Usernames;
    }

    export type Payload =
      | ValidatedResponse<"__Empty", 204, Schemas.__Empty>
      | ValidatedResponse<"__Empty", 400, Schemas.__Empty>
      | ValidatedResponse<"__Empty", 401, Schemas.__Empty>
      | ValidatedResponse<"Error403", 403, Schemas.Error403>
      | ValidatedResponse<"Error", 404, Schemas.Error>
      | ValidatedResponse<"Error", 500, Schemas.Error>
      | ValidatedResponse<"unknown", undefined, unknown>;
  }
  export module ListRolesForGroup {
    const Uuid = z.string();
    type Uuid = string;
    const Exclude = z.boolean();
    type Exclude = boolean;
    const RoleName = z.string();
    type RoleName = string;
    const RoleDisplayName = z.string();
    type RoleDisplayName = string;
    const RoleDescription = z.string();
    type RoleDescription = string;
    const RoleSystem = z.boolean();
    type RoleSystem = boolean;
    const Limit = z.number().int();
    type Limit = number;
    const Offset = z.number().int();
    type Offset = number;
    const OrderBy = z.enum(["name", "display_name", "modified", "policyCount"]);
    type OrderBy = "name" | "display_name" | "modified" | "policyCount";
    export interface Params {
      uuid: Uuid;
      exclude?: Exclude;
      roleName?: RoleName;
      roleDisplayName?: RoleDisplayName;
      roleDescription?: RoleDescription;
      roleSystem?: RoleSystem;
      limit?: Limit;
      offset?: Offset;
      orderBy?: OrderBy;
    }

    export type Payload =
      | ValidatedResponse<
          "GroupRolesPagination",
          200,
          Schemas.GroupRolesPagination
        >
      | ValidatedResponse<"__Empty", 401, Schemas.__Empty>
      | ValidatedResponse<"Error403", 403, Schemas.Error403>
      | ValidatedResponse<"Error", 500, Schemas.Error>
      | ValidatedResponse<"unknown", undefined, unknown>;
  }
  export module AddRoleToGroup {
    const Uuid = z.string();
    type Uuid = string;
    export const Response200 = z
      .object({
        data: z.array(Schemas.RoleOut),
      })
      .nonstrict()
      .transform((o) => ({
        data: o.data,
      }));
    export type Response200 = {
      data: Array<Schemas.RoleOut>;
    };
    export interface Params {
      uuid: Uuid;
      body: Schemas.GroupRoleIn;
    }

    export type Payload =
      | ValidatedResponse<"unknown", 200, Response200>
      | ValidatedResponse<"__Empty", 400, Schemas.__Empty>
      | ValidatedResponse<"__Empty", 401, Schemas.__Empty>
      | ValidatedResponse<"Error403", 403, Schemas.Error403>
      | ValidatedResponse<"Error", 404, Schemas.Error>
      | ValidatedResponse<"Error", 500, Schemas.Error>
      | ValidatedResponse<"unknown", undefined, unknown>;
  }
  export module DeleteRoleFromGroup {
    const Uuid = z.string();
    type Uuid = string;
    const Roles = z.string();
    type Roles = string;
    export interface Params {
      uuid: Uuid;
      roles: Roles;
    }

    export type Payload =
      | ValidatedResponse<"__Empty", 204, Schemas.__Empty>
      | ValidatedResponse<"__Empty", 400, Schemas.__Empty>
      | ValidatedResponse<"__Empty", 401, Schemas.__Empty>
      | ValidatedResponse<"Error403", 403, Schemas.Error403>
      | ValidatedResponse<"Error", 404, Schemas.Error>
      | ValidatedResponse<"Error", 500, Schemas.Error>
      | ValidatedResponse<"unknown", undefined, unknown>;
  }
  export module ListPermissions {
    const Limit = z.number().int();
    type Limit = number;
    const Offset = z.number().int();
    type Offset = number;
    const OrderBy = z.enum([
      "application",
      "resource_type",
      "verb",
      "permission",
    ]);
    type OrderBy = "application" | "resource_type" | "verb" | "permission";
    const Application = z.string();
    type Application = string;
    const ResourceType = z.string();
    type ResourceType = string;
    const Verb = z.string();
    type Verb = string;
    const Permission = z.string();
    type Permission = string;
    const ExcludeGlobals = z.enum(["true", "false"]);
    type ExcludeGlobals = "true" | "false";
    const ExcludeRoles = z.string();
    type ExcludeRoles = string;
    const AllowedOnly = z.enum(["true", "false"]);
    type AllowedOnly = "true" | "false";
    export interface Params {
      limit?: Limit;
      offset?: Offset;
      orderBy?: OrderBy;
      application?: Application;
      resourceType?: ResourceType;
      verb?: Verb;
      permission?: Permission;
      excludeGlobals?: ExcludeGlobals;
      excludeRoles?: ExcludeRoles;
      allowedOnly?: AllowedOnly;
    }

    export type Payload =
      | ValidatedResponse<
          "PermissionPagination",
          200,
          Schemas.PermissionPagination
        >
      | ValidatedResponse<"__Empty", 401, Schemas.__Empty>
      | ValidatedResponse<"Error403", 403, Schemas.Error403>
      | ValidatedResponse<"Error", 500, Schemas.Error>
      | ValidatedResponse<"unknown", undefined, unknown>;
  }
  export module ListPermissionOptions {
    const Limit = z.number().int();
    type Limit = number;
    const Offset = z.number().int();
    type Offset = number;
    const Field = z.enum(["application", "resource_type", "verb"]);
    type Field = "application" | "resource_type" | "verb";
    const Application = z.string();
    type Application = string;
    const ResourceType = z.string();
    type ResourceType = string;
    const Verb = z.string();
    type Verb = string;
    const ExcludeGlobals = z.enum(["true", "false"]);
    type ExcludeGlobals = "true" | "false";
    const AllowedOnly = z.enum(["true", "false"]);
    type AllowedOnly = "true" | "false";
    export interface Params {
      limit?: Limit;
      offset?: Offset;
      field: Field;
      application?: Application;
      resourceType?: ResourceType;
      verb?: Verb;
      excludeGlobals?: ExcludeGlobals;
      allowedOnly?: AllowedOnly;
    }

    export type Payload =
      | ValidatedResponse<
          "PermissionOptionsPagination",
          200,
          Schemas.PermissionOptionsPagination
        >
      | ValidatedResponse<"__Empty", 401, Schemas.__Empty>
      | ValidatedResponse<"Error403", 403, Schemas.Error403>
      | ValidatedResponse<"Error", 500, Schemas.Error>
      | ValidatedResponse<"unknown", undefined, unknown>;
  }
  export module ListPolicies {
    const Limit = z.number().int();
    type Limit = number;
    const Offset = z.number().int();
    type Offset = number;
    const Name = z.string();
    type Name = string;
    const Scope = z.enum(["account", "principal"]);
    type Scope = "account" | "principal";
    const GroupName = z.string();
    type GroupName = string;
    const GroupUuid = z.string();
    type GroupUuid = string;
    const OrderBy = z.enum(["name", "modified"]);
    type OrderBy = "name" | "modified";
    export interface Params {
      limit?: Limit;
      offset?: Offset;
      name?: Name;
      scope?: Scope;
      groupName?: GroupName;
      groupUuid?: GroupUuid;
      orderBy?: OrderBy;
    }

    export type Payload =
      | ValidatedResponse<"PolicyPagination", 200, Schemas.PolicyPagination>
      | ValidatedResponse<"__Empty", 401, Schemas.__Empty>
      | ValidatedResponse<"Error", 500, Schemas.Error>
      | ValidatedResponse<"unknown", undefined, unknown>;
  }
  export module CreatePolicies {
    export interface Params {
      body: Schemas.PolicyIn;
    }

    export type Payload =
      | ValidatedResponse<"PolicyExtended", 201, Schemas.PolicyExtended>
      | ValidatedResponse<"__Empty", 401, Schemas.__Empty>
      | ValidatedResponse<"Error", 500, Schemas.Error>
      | ValidatedResponse<"unknown", undefined, unknown>;
  }
  export module GetPolicy {
    const Uuid = z.string();
    type Uuid = string;
    export interface Params {
      uuid: Uuid;
    }

    export type Payload =
      | ValidatedResponse<"PolicyExtended", 200, Schemas.PolicyExtended>
      | ValidatedResponse<"__Empty", 401, Schemas.__Empty>
      | ValidatedResponse<"Error", 404, Schemas.Error>
      | ValidatedResponse<"Error", 500, Schemas.Error>
      | ValidatedResponse<"unknown", undefined, unknown>;
  }
  export module UpdatePolicy {
    const Uuid = z.string();
    type Uuid = string;
    export interface Params {
      uuid: Uuid;
      body: Schemas.PolicyIn;
    }

    export type Payload =
      | ValidatedResponse<"PolicyExtended", 200, Schemas.PolicyExtended>
      | ValidatedResponse<"__Empty", 401, Schemas.__Empty>
      | ValidatedResponse<"Error", 404, Schemas.Error>
      | ValidatedResponse<"Error", 500, Schemas.Error>
      | ValidatedResponse<"unknown", undefined, unknown>;
  }
  export module DeletePolicy {
    const Uuid = z.string();
    type Uuid = string;
    export interface Params {
      uuid: Uuid;
    }

    export type Payload =
      | ValidatedResponse<"__Empty", 204, Schemas.__Empty>
      | ValidatedResponse<"__Empty", 401, Schemas.__Empty>
      | ValidatedResponse<"Error", 404, Schemas.Error>
      | ValidatedResponse<"Error", 500, Schemas.Error>
      | ValidatedResponse<"unknown", undefined, unknown>;
  }
  export module ListPrincipals {
    const Limit = z.number().int();
    type Limit = number;
    const Offset = z.number().int();
    type Offset = number;
    const MatchCriteria = z.enum(["partial", "exact"]);
    type MatchCriteria = "partial" | "exact";
    const Usernames = z.string();
    type Usernames = string;
    const SortOrder = z.enum(["asc", "desc"]);
    type SortOrder = "asc" | "desc";
    const Email = z.string();
    type Email = string;
    const Status = z.enum(["enabled", "disabled", "all"]);
    type Status = "enabled" | "disabled" | "all";
    const AdminOnly = z.enum(["true", "false"]);
    type AdminOnly = "true" | "false";
    const OrderBy = z.enum(["username"]);
    type OrderBy = "username";
    export interface Params {
      limit?: Limit;
      offset?: Offset;
      matchCriteria?: MatchCriteria;
      usernames?: Usernames;
      sortOrder?: SortOrder;
      email?: Email;
      status?: Status;
      adminOnly?: AdminOnly;
      orderBy?: OrderBy;
    }

    export type Payload =
      | ValidatedResponse<
          "PrincipalPagination",
          200,
          Schemas.PrincipalPagination
        >
      | ValidatedResponse<"__Empty", 401, Schemas.__Empty>
      | ValidatedResponse<"Error403", 403, Schemas.Error403>
      | ValidatedResponse<"Error", 500, Schemas.Error>
      | ValidatedResponse<"unknown", undefined, unknown>;
  }
  export module ListRoles {
    const Limit = z.number().int();
    type Limit = number;
    const Offset = z.number().int();
    type Offset = number;
    const Name = z.string();
    type Name = string;
    const System = z.boolean();
    type System = boolean;
    const DisplayName = z.string();
    type DisplayName = string;
    const NameMatch = z.enum(["partial", "exact"]);
    type NameMatch = "partial" | "exact";
    const Scope = z.enum(["account", "principal"]);
    type Scope = "account" | "principal";
    const OrderBy = z.enum(["name", "display_name", "modified", "policyCount"]);
    type OrderBy = "name" | "display_name" | "modified" | "policyCount";
    const AddFields = z.array(z.enum(["groups_in", "groups_in_count"]));
    type AddFields = Array<"groups_in" | "groups_in_count">;
    const Username = z.string();
    type Username = string;
    const Application = z.string();
    type Application = string;
    const Permission = z.string();
    type Permission = string;
    export interface Params {
      limit?: Limit;
      offset?: Offset;
      name?: Name;
      system?: System;
      displayName?: DisplayName;
      nameMatch?: NameMatch;
      scope?: Scope;
      orderBy?: OrderBy;
      addFields?: AddFields;
      username?: Username;
      application?: Application;
      permission?: Permission;
    }

    export type Payload =
      | ValidatedResponse<
          "RolePaginationDynamic",
          200,
          Schemas.RolePaginationDynamic
        >
      | ValidatedResponse<"__Empty", 401, Schemas.__Empty>
      | ValidatedResponse<"Error403", 403, Schemas.Error403>
      | ValidatedResponse<"Error", 500, Schemas.Error>
      | ValidatedResponse<"unknown", undefined, unknown>;
  }
  export module CreateRoles {
    export interface Params {
      body: Schemas.RoleIn;
    }

    export type Payload =
      | ValidatedResponse<"RoleWithAccess", 201, Schemas.RoleWithAccess>
      | ValidatedResponse<"__Empty", 401, Schemas.__Empty>
      | ValidatedResponse<"Error403", 403, Schemas.Error403>
      | ValidatedResponse<"Error", 500, Schemas.Error>
      | ValidatedResponse<"unknown", undefined, unknown>;
  }
  export module GetRole {
    const Uuid = z.string();
    type Uuid = string;
    const Scope = z.enum(["account", "principal"]);
    type Scope = "account" | "principal";
    export interface Params {
      uuid: Uuid;
      scope?: Scope;
    }

    export type Payload =
      | ValidatedResponse<"RoleWithAccess", 200, Schemas.RoleWithAccess>
      | ValidatedResponse<"__Empty", 401, Schemas.__Empty>
      | ValidatedResponse<"Error403", 403, Schemas.Error403>
      | ValidatedResponse<"Error", 404, Schemas.Error>
      | ValidatedResponse<"Error", 500, Schemas.Error>
      | ValidatedResponse<"unknown", undefined, unknown>;
  }
  export module UpdateRole {
    const Uuid = z.string();
    type Uuid = string;
    export interface Params {
      uuid: Uuid;
      body: Schemas.RoleWithAccess;
    }

    export type Payload =
      | ValidatedResponse<"__Empty", 200, Schemas.__Empty>
      | ValidatedResponse<"__Empty", 401, Schemas.__Empty>
      | ValidatedResponse<"Error403", 403, Schemas.Error403>
      | ValidatedResponse<"Error", 404, Schemas.Error>
      | ValidatedResponse<"Error", 500, Schemas.Error>
      | ValidatedResponse<"unknown", undefined, unknown>;
  }
  export module DeleteRole {
    const Uuid = z.string();
    type Uuid = string;
    export interface Params {
      uuid: Uuid;
    }

    export type Payload =
      | ValidatedResponse<"__Empty", 204, Schemas.__Empty>
      | ValidatedResponse<"__Empty", 401, Schemas.__Empty>
      | ValidatedResponse<"Error403", 403, Schemas.Error403>
      | ValidatedResponse<"Error", 404, Schemas.Error>
      | ValidatedResponse<"Error", 500, Schemas.Error>
      | ValidatedResponse<"unknown", undefined, unknown>;
  }
  export module GetRoleAccess {
    const Uuid = z.string();
    type Uuid = string;
    const Limit = z.number().int();
    type Limit = number;
    const Offset = z.number().int();
    type Offset = number;
    export interface Params {
      uuid: Uuid;
      limit?: Limit;
      offset?: Offset;
    }

    export type Payload =
      | ValidatedResponse<"AccessPagination", 200, Schemas.AccessPagination>
      | ValidatedResponse<"__Empty", 401, Schemas.__Empty>
      | ValidatedResponse<"Error403", 403, Schemas.Error403>
      | ValidatedResponse<"Error", 404, Schemas.Error>
      | ValidatedResponse<"Error", 500, Schemas.Error>
      | ValidatedResponse<"unknown", undefined, unknown>;
  }
  export module GetStatus {
    export type Payload =
      | ValidatedResponse<"Status", 200, Schemas.Status>
      | ValidatedResponse<"Error", 500, Schemas.Error>
      | ValidatedResponse<"unknown", undefined, unknown>;
  }
}

const createClient = () => {
  // GET /access/
  // Get the permitted access for a principal in the tenant (defaults to principal from the identity header)
  const GetPrincipalAccess = (() => {
    type ActionCreator = Action<Operations.GetPrincipalAccess.Payload>;
    const actionCreator = (
      params: Operations.GetPrincipalAccess.Params
    ): ActionCreator => {
      const path = "/api/rbac/v1/access/";
      const query = {} as Record<string, any>;
      if (params["application"] !== undefined) {
        query["application"] = params["application"];
      }

      if (params["username"] !== undefined) {
        query["username"] = params["username"];
      }

      if (params["orderBy"] !== undefined) {
        query["order_by"] = params["orderBy"];
      }

      if (params["limit"] !== undefined) {
        query["limit"] = params["limit"];
      }

      if (params["offset"] !== undefined) {
        query["offset"] = params["offset"];
      }

      return actionBuilder("GET", path).queryParams(query).build();
    };
    const rules = [
      new ValidateRule(Schemas.AccessPagination, "AccessPagination", 200),
      new ValidateRule(Schemas.__Empty, "__Empty", 401),
      new ValidateRule(Schemas.Error, "Error", 404),
      new ValidateRule(Schemas.Error, "Error", 500),
    ];
    const useQuery = (
      params: Operations.GetPrincipalAccess.Params,
      initFetch?: boolean
    ) =>
      useWrappedQuery<Operations.GetPrincipalAccess.Payload>(
        actionCreator(params),
        rules,
        initFetch
      );
    const useParameterizedQuery = () =>
      useWrappedParameterizedQuery<
        Operations.GetPrincipalAccess.Payload,
        Operations.GetPrincipalAccess.Params
      >(actionCreator, rules);
    const useRequest = () =>
      useWrappedRequest<
        Operations.GetPrincipalAccess.Payload,
        Operations.GetPrincipalAccess.Params
      >(actionCreator, rules);
    return { useQuery, useParameterizedQuery, useRequest };
  })();
  // GET /cross-account-requests/
  // List the cross account requests for a user or account
  const ListCrossAccountRequests = (() => {
    type ActionCreator = Action<Operations.ListCrossAccountRequests.Payload>;
    const actionCreator = (
      params: Operations.ListCrossAccountRequests.Params = {}
    ): ActionCreator => {
      const path = "/api/rbac/v1/cross-account-requests/";
      const query = {} as Record<string, any>;
      if (params["limit"] !== undefined) {
        query["limit"] = params["limit"];
      }

      if (params["offset"] !== undefined) {
        query["offset"] = params["offset"];
      }

      if (params["queryBy"] !== undefined) {
        query["query_by"] = params["queryBy"];
      }

      if (params["account"] !== undefined) {
        query["account"] = params["account"];
      }

      if (params["approvedOnly"] !== undefined) {
        query["approved_only"] = params["approvedOnly"];
      }

      if (params["status"] !== undefined) {
        query["status"] = params["status"];
      }

      if (params["orderBy"] !== undefined) {
        query["order_by"] = params["orderBy"];
      }

      return actionBuilder("GET", path).queryParams(query).build();
    };
    const rules = [
      new ValidateRule(
        Schemas.CrossAccountRequestPagination,
        "CrossAccountRequestPagination",
        200
      ),
      new ValidateRule(Schemas.__Empty, "__Empty", 401),
      new ValidateRule(Schemas.Error403, "Error403", 403),
      new ValidateRule(Schemas.Error, "Error", 500),
    ];
    const useQuery = (
      params: Operations.ListCrossAccountRequests.Params,
      initFetch?: boolean
    ) =>
      useWrappedQuery<Operations.ListCrossAccountRequests.Payload>(
        actionCreator(params),
        rules,
        initFetch
      );
    const useParameterizedQuery = () =>
      useWrappedParameterizedQuery<
        Operations.ListCrossAccountRequests.Payload,
        Operations.ListCrossAccountRequests.Params
      >(actionCreator, rules);
    const useRequest = () =>
      useWrappedRequest<
        Operations.ListCrossAccountRequests.Payload,
        Operations.ListCrossAccountRequests.Params
      >(actionCreator, rules);
    return { useQuery, useParameterizedQuery, useRequest };
  })();
  // POST /cross-account-requests/
  // Create a cross account request
  const CreateCrossAccountRequests = (() => {
    type ActionCreator = Action<Operations.CreateCrossAccountRequests.Payload>;
    const actionCreator = (
      params: Operations.CreateCrossAccountRequests.Params
    ): ActionCreator => {
      const path = "/api/rbac/v1/cross-account-requests/";
      const query = {} as Record<string, any>;
      return actionBuilder("POST", path)
        .queryParams(query)
        .data({
          end_date: params.body.endDate,
          roles: params.body.roles,
          start_date: params.body.startDate,
          target_account: params.body.targetAccount,
          target_org: params.body.targetOrg,
        })
        .build();
    };
    const rules = [
      new ValidateRule(
        Schemas.CrossAccountRequestOut,
        "CrossAccountRequestOut",
        201
      ),
      new ValidateRule(Schemas.__Empty, "__Empty", 401),
      new ValidateRule(Schemas.Error403, "Error403", 403),
      new ValidateRule(Schemas.Error, "Error", 500),
    ];
    const useMutation = () =>
      useWrappedMutation<
        Operations.CreateCrossAccountRequests.Payload,
        Operations.CreateCrossAccountRequests.Params
      >(actionCreator, rules);
    const useRequest = () =>
      useWrappedRequest<
        Operations.CreateCrossAccountRequests.Payload,
        Operations.CreateCrossAccountRequests.Params
      >(actionCreator, rules);
    return { useMutation, useRequest };
  })();
  // GET /cross-account-requests/{uuid}/
  // Get a cross account request
  const GetCrossAccountRequest = (() => {
    type ActionCreator = Action<Operations.GetCrossAccountRequest.Payload>;
    const actionCreator = (
      params: Operations.GetCrossAccountRequest.Params
    ): ActionCreator => {
      const path = "/api/rbac/v1/cross-account-requests/{uuid}/".replace(
        "{uuid}",
        params["uuid"].toString()
      );
      const query = {} as Record<string, any>;
      if (params["queryBy"] !== undefined) {
        query["query_by"] = params["queryBy"];
      }

      if (params["account"] !== undefined) {
        query["account"] = params["account"];
      }

      if (params["approvedOnly"] !== undefined) {
        query["approved_only"] = params["approvedOnly"];
      }

      return actionBuilder("GET", path).queryParams(query).build();
    };
    const rules = [
      new ValidateRule(
        Schemas.CrossAccountRequestDetail,
        "CrossAccountRequestDetail",
        200
      ),
      new ValidateRule(Schemas.__Empty, "__Empty", 401),
      new ValidateRule(Schemas.Error403, "Error403", 403),
      new ValidateRule(Schemas.Error, "Error", 404),
      new ValidateRule(Schemas.Error, "Error", 500),
    ];
    const useQuery = (
      params: Operations.GetCrossAccountRequest.Params,
      initFetch?: boolean
    ) =>
      useWrappedQuery<Operations.GetCrossAccountRequest.Payload>(
        actionCreator(params),
        rules,
        initFetch
      );
    const useParameterizedQuery = () =>
      useWrappedParameterizedQuery<
        Operations.GetCrossAccountRequest.Payload,
        Operations.GetCrossAccountRequest.Params
      >(actionCreator, rules);
    const useRequest = () =>
      useWrappedRequest<
        Operations.GetCrossAccountRequest.Payload,
        Operations.GetCrossAccountRequest.Params
      >(actionCreator, rules);
    return { useQuery, useParameterizedQuery, useRequest };
  })();
  // PUT /cross-account-requests/{uuid}/
  // Update a cross account request
  const PutCrossAccountRequest = (() => {
    type ActionCreator = Action<Operations.PutCrossAccountRequest.Payload>;
    const actionCreator = (
      params: Operations.PutCrossAccountRequest.Params
    ): ActionCreator => {
      const path = "/api/rbac/v1/cross-account-requests/{uuid}/".replace(
        "{uuid}",
        params["uuid"].toString()
      );
      const query = {} as Record<string, any>;
      return actionBuilder("PUT", path)
        .queryParams(query)
        .data({
          end_date: params.body.endDate,
          roles: params.body.roles,
          start_date: params.body.startDate,
        })
        .build();
    };
    const rules = [
      new ValidateRule(
        Schemas.CrossAccountRequestDetail,
        "CrossAccountRequestDetail",
        200
      ),
      new ValidateRule(
        Schemas.CrossAccountRequestOut,
        "CrossAccountRequestOut",
        201
      ),
      new ValidateRule(Schemas.__Empty, "__Empty", 401),
      new ValidateRule(Schemas.Error403, "Error403", 403),
      new ValidateRule(Schemas.Error, "Error", 404),
      new ValidateRule(Schemas.Error, "Error", 500),
    ];
    const useMutation = () =>
      useWrappedMutation<
        Operations.PutCrossAccountRequest.Payload,
        Operations.PutCrossAccountRequest.Params
      >(actionCreator, rules);
    const useRequest = () =>
      useWrappedRequest<
        Operations.PutCrossAccountRequest.Payload,
        Operations.PutCrossAccountRequest.Params
      >(actionCreator, rules);
    return { useMutation, useRequest };
  })();
  // GET /groups/
  // List the groups for a tenant
  const ListGroups = (() => {
    type ActionCreator = Action<Operations.ListGroups.Payload>;
    const actionCreator = (
      params: Operations.ListGroups.Params = {}
    ): ActionCreator => {
      const path = "/api/rbac/v1/groups/";
      const query = {} as Record<string, any>;
      if (params["limit"] !== undefined) {
        query["limit"] = params["limit"];
      }

      if (params["offset"] !== undefined) {
        query["offset"] = params["offset"];
      }

      if (params["name"] !== undefined) {
        query["name"] = params["name"];
      }

      if (params["nameMatch"] !== undefined) {
        query["name_match"] = params["nameMatch"];
      }

      if (params["scope"] !== undefined) {
        query["scope"] = params["scope"];
      }

      if (params["username"] !== undefined) {
        query["username"] = params["username"];
      }

      if (params["uuid"] !== undefined) {
        query["uuid"] = params["uuid"];
      }

      if (params["roleNames"] !== undefined) {
        query["role_names"] = params["roleNames"];
      }

      if (params["roleDiscriminator"] !== undefined) {
        query["role_discriminator"] = params["roleDiscriminator"];
      }

      if (params["orderBy"] !== undefined) {
        query["order_by"] = params["orderBy"];
      }

      if (params["platformDefault"] !== undefined) {
        query["platform_default"] = params["platformDefault"];
      }

      if (params["adminDefault"] !== undefined) {
        query["admin_default"] = params["adminDefault"];
      }

      if (params["system"] !== undefined) {
        query["system"] = params["system"];
      }

      return actionBuilder("GET", path).queryParams(query).build();
    };
    const rules = [
      new ValidateRule(Schemas.GroupPagination, "GroupPagination", 200),
      new ValidateRule(Schemas.__Empty, "__Empty", 401),
      new ValidateRule(Schemas.Error403, "Error403", 403),
      new ValidateRule(Schemas.Error, "Error", 500),
    ];
    const useQuery = (
      params: Operations.ListGroups.Params,
      initFetch?: boolean
    ) =>
      useWrappedQuery<Operations.ListGroups.Payload>(
        actionCreator(params),
        rules,
        initFetch
      );
    const useParameterizedQuery = () =>
      useWrappedParameterizedQuery<
        Operations.ListGroups.Payload,
        Operations.ListGroups.Params
      >(actionCreator, rules);
    const useRequest = () =>
      useWrappedRequest<
        Operations.ListGroups.Payload,
        Operations.ListGroups.Params
      >(actionCreator, rules);
    return { useQuery, useParameterizedQuery, useRequest };
  })();
  // POST /groups/
  // Create a group in a tenant
  const CreateGroup = (() => {
    type ActionCreator = Action<Operations.CreateGroup.Payload>;
    const actionCreator = (
      params: Operations.CreateGroup.Params
    ): ActionCreator => {
      const path = "/api/rbac/v1/groups/";
      const query = {} as Record<string, any>;
      return actionBuilder("POST", path)
        .queryParams(query)
        .data({
          description: params.body.description,
          name: params.body.name,
        })
        .build();
    };
    const rules = [
      new ValidateRule(Schemas.GroupOut, "GroupOut", 201),
      new ValidateRule(Schemas.__Empty, "__Empty", 401),
      new ValidateRule(Schemas.Error403, "Error403", 403),
      new ValidateRule(Schemas.Error, "Error", 500),
    ];
    const useMutation = () =>
      useWrappedMutation<
        Operations.CreateGroup.Payload,
        Operations.CreateGroup.Params
      >(actionCreator, rules);
    const useRequest = () =>
      useWrappedRequest<
        Operations.CreateGroup.Payload,
        Operations.CreateGroup.Params
      >(actionCreator, rules);
    return { useMutation, useRequest };
  })();
  // GET /groups/{uuid}/
  // Get a group in the tenant
  const GetGroup = (() => {
    type ActionCreator = Action<Operations.GetGroup.Payload>;
    const actionCreator = (
      params: Operations.GetGroup.Params
    ): ActionCreator => {
      const path = "/api/rbac/v1/groups/{uuid}/".replace(
        "{uuid}",
        params["uuid"].toString()
      );
      const query = {} as Record<string, any>;
      return actionBuilder("GET", path).queryParams(query).build();
    };
    const rules = [
      new ValidateRule(
        Schemas.GroupWithPrincipalsAndRoles,
        "GroupWithPrincipalsAndRoles",
        200
      ),
      new ValidateRule(Schemas.__Empty, "__Empty", 401),
      new ValidateRule(Schemas.Error403, "Error403", 403),
      new ValidateRule(Schemas.Error, "Error", 404),
      new ValidateRule(Schemas.Error, "Error", 500),
    ];
    const useQuery = (
      params: Operations.GetGroup.Params,
      initFetch?: boolean
    ) =>
      useWrappedQuery<Operations.GetGroup.Payload>(
        actionCreator(params),
        rules,
        initFetch
      );
    const useParameterizedQuery = () =>
      useWrappedParameterizedQuery<
        Operations.GetGroup.Payload,
        Operations.GetGroup.Params
      >(actionCreator, rules);
    const useRequest = () =>
      useWrappedRequest<
        Operations.GetGroup.Payload,
        Operations.GetGroup.Params
      >(actionCreator, rules);
    return { useQuery, useParameterizedQuery, useRequest };
  })();
  // PUT /groups/{uuid}/
  // Update a group in the tenant
  const UpdateGroup = (() => {
    type ActionCreator = Action<Operations.UpdateGroup.Payload>;
    const actionCreator = (
      params: Operations.UpdateGroup.Params
    ): ActionCreator => {
      const path = "/api/rbac/v1/groups/{uuid}/".replace(
        "{uuid}",
        params["uuid"].toString()
      );
      const query = {} as Record<string, any>;
      return actionBuilder("PUT", path)
        .queryParams(query)
        .data({
          description: params.body.description,
          name: params.body.name,
        })
        .build();
    };
    const rules = [
      new ValidateRule(Schemas.GroupOut, "GroupOut", 200),
      new ValidateRule(Schemas.__Empty, "__Empty", 401),
      new ValidateRule(Schemas.Error403, "Error403", 403),
      new ValidateRule(Schemas.Error, "Error", 404),
      new ValidateRule(Schemas.Error, "Error", 500),
    ];
    const useMutation = () =>
      useWrappedMutation<
        Operations.UpdateGroup.Payload,
        Operations.UpdateGroup.Params
      >(actionCreator, rules);
    const useRequest = () =>
      useWrappedRequest<
        Operations.UpdateGroup.Payload,
        Operations.UpdateGroup.Params
      >(actionCreator, rules);
    return { useMutation, useRequest };
  })();
  // DELETE /groups/{uuid}/
  // Delete a group in the tenant
  const DeleteGroup = (() => {
    type ActionCreator = Action<Operations.DeleteGroup.Payload>;
    const actionCreator = (
      params: Operations.DeleteGroup.Params
    ): ActionCreator => {
      const path = "/api/rbac/v1/groups/{uuid}/".replace(
        "{uuid}",
        params["uuid"].toString()
      );
      const query = {} as Record<string, any>;
      return actionBuilder("DELETE", path).queryParams(query).build();
    };
    const rules = [
      new ValidateRule(Schemas.__Empty, "__Empty", 204),
      new ValidateRule(Schemas.__Empty, "__Empty", 401),
      new ValidateRule(Schemas.Error403, "Error403", 403),
      new ValidateRule(Schemas.Error, "Error", 404),
      new ValidateRule(Schemas.Error, "Error", 500),
    ];
    const useMutation = () =>
      useWrappedMutation<
        Operations.DeleteGroup.Payload,
        Operations.DeleteGroup.Params
      >(actionCreator, rules);
    const useRequest = () =>
      useWrappedRequest<
        Operations.DeleteGroup.Payload,
        Operations.DeleteGroup.Params
      >(actionCreator, rules);
    return { useMutation, useRequest };
  })();
  // GET /groups/{uuid}/principals/
  // Get a list of principals from a group in the tenant
  const GetPrincipalsFromGroup = (() => {
    type ActionCreator = Action<Operations.GetPrincipalsFromGroup.Payload>;
    const actionCreator = (
      params: Operations.GetPrincipalsFromGroup.Params
    ): ActionCreator => {
      const path = "/api/rbac/v1/groups/{uuid}/principals/".replace(
        "{uuid}",
        params["uuid"].toString()
      );
      const query = {} as Record<string, any>;
      if (params["principalUsername"] !== undefined) {
        query["principal_username"] = params["principalUsername"];
      }

      if (params["limit"] !== undefined) {
        query["limit"] = params["limit"];
      }

      if (params["offset"] !== undefined) {
        query["offset"] = params["offset"];
      }

      if (params["orderBy"] !== undefined) {
        query["order_by"] = params["orderBy"];
      }

      return actionBuilder("GET", path).queryParams(query).build();
    };
    const rules = [
      new ValidateRule(Schemas.PrincipalPagination, "PrincipalPagination", 200),
      new ValidateRule(Schemas.__Empty, "__Empty", 400),
      new ValidateRule(Schemas.__Empty, "__Empty", 401),
      new ValidateRule(Schemas.Error, "Error", 404),
      new ValidateRule(Schemas.Error, "Error", 500),
    ];
    const useQuery = (
      params: Operations.GetPrincipalsFromGroup.Params,
      initFetch?: boolean
    ) =>
      useWrappedQuery<Operations.GetPrincipalsFromGroup.Payload>(
        actionCreator(params),
        rules,
        initFetch
      );
    const useParameterizedQuery = () =>
      useWrappedParameterizedQuery<
        Operations.GetPrincipalsFromGroup.Payload,
        Operations.GetPrincipalsFromGroup.Params
      >(actionCreator, rules);
    const useRequest = () =>
      useWrappedRequest<
        Operations.GetPrincipalsFromGroup.Payload,
        Operations.GetPrincipalsFromGroup.Params
      >(actionCreator, rules);
    return { useQuery, useParameterizedQuery, useRequest };
  })();
  // POST /groups/{uuid}/principals/
  // Add a principal to a group in the tenant
  const AddPrincipalToGroup = (() => {
    type ActionCreator = Action<Operations.AddPrincipalToGroup.Payload>;
    const actionCreator = (
      params: Operations.AddPrincipalToGroup.Params
    ): ActionCreator => {
      const path = "/api/rbac/v1/groups/{uuid}/principals/".replace(
        "{uuid}",
        params["uuid"].toString()
      );
      const query = {} as Record<string, any>;
      return actionBuilder("POST", path)
        .queryParams(query)
        .data({
          principals: params.body.principals,
        })
        .build();
    };
    const rules = [
      new ValidateRule(
        Schemas.GroupWithPrincipalsAndRoles,
        "GroupWithPrincipalsAndRoles",
        200
      ),
      new ValidateRule(Schemas.__Empty, "__Empty", 400),
      new ValidateRule(Schemas.__Empty, "__Empty", 401),
      new ValidateRule(Schemas.Error403, "Error403", 403),
      new ValidateRule(Schemas.Error, "Error", 404),
      new ValidateRule(Schemas.Error, "Error", 500),
    ];
    const useMutation = () =>
      useWrappedMutation<
        Operations.AddPrincipalToGroup.Payload,
        Operations.AddPrincipalToGroup.Params
      >(actionCreator, rules);
    const useRequest = () =>
      useWrappedRequest<
        Operations.AddPrincipalToGroup.Payload,
        Operations.AddPrincipalToGroup.Params
      >(actionCreator, rules);
    return { useMutation, useRequest };
  })();
  // DELETE /groups/{uuid}/principals/
  // Remove a principal from a group in the tenant
  const DeletePrincipalFromGroup = (() => {
    type ActionCreator = Action<Operations.DeletePrincipalFromGroup.Payload>;
    const actionCreator = (
      params: Operations.DeletePrincipalFromGroup.Params
    ): ActionCreator => {
      const path = "/api/rbac/v1/groups/{uuid}/principals/".replace(
        "{uuid}",
        params["uuid"].toString()
      );
      const query = {} as Record<string, any>;
      if (params["usernames"] !== undefined) {
        query["usernames"] = params["usernames"];
      }

      return actionBuilder("DELETE", path).queryParams(query).build();
    };
    const rules = [
      new ValidateRule(Schemas.__Empty, "__Empty", 204),
      new ValidateRule(Schemas.__Empty, "__Empty", 400),
      new ValidateRule(Schemas.__Empty, "__Empty", 401),
      new ValidateRule(Schemas.Error403, "Error403", 403),
      new ValidateRule(Schemas.Error, "Error", 404),
      new ValidateRule(Schemas.Error, "Error", 500),
    ];
    const useMutation = () =>
      useWrappedMutation<
        Operations.DeletePrincipalFromGroup.Payload,
        Operations.DeletePrincipalFromGroup.Params
      >(actionCreator, rules);
    const useRequest = () =>
      useWrappedRequest<
        Operations.DeletePrincipalFromGroup.Payload,
        Operations.DeletePrincipalFromGroup.Params
      >(actionCreator, rules);
    return { useMutation, useRequest };
  })();
  // GET /groups/{uuid}/roles/
  // List the roles for a group in the tenant
  const ListRolesForGroup = (() => {
    type ActionCreator = Action<Operations.ListRolesForGroup.Payload>;
    const actionCreator = (
      params: Operations.ListRolesForGroup.Params
    ): ActionCreator => {
      const path = "/api/rbac/v1/groups/{uuid}/roles/".replace(
        "{uuid}",
        params["uuid"].toString()
      );
      const query = {} as Record<string, any>;
      if (params["exclude"] !== undefined) {
        query["exclude"] = params["exclude"];
      }

      if (params["roleName"] !== undefined) {
        query["role_name"] = params["roleName"];
      }

      if (params["roleDisplayName"] !== undefined) {
        query["role_display_name"] = params["roleDisplayName"];
      }

      if (params["roleDescription"] !== undefined) {
        query["role_description"] = params["roleDescription"];
      }

      if (params["roleSystem"] !== undefined) {
        query["role_system"] = params["roleSystem"];
      }

      if (params["limit"] !== undefined) {
        query["limit"] = params["limit"];
      }

      if (params["offset"] !== undefined) {
        query["offset"] = params["offset"];
      }

      if (params["orderBy"] !== undefined) {
        query["order_by"] = params["orderBy"];
      }

      return actionBuilder("GET", path).queryParams(query).build();
    };
    const rules = [
      new ValidateRule(
        Schemas.GroupRolesPagination,
        "GroupRolesPagination",
        200
      ),
      new ValidateRule(Schemas.__Empty, "__Empty", 401),
      new ValidateRule(Schemas.Error403, "Error403", 403),
      new ValidateRule(Schemas.Error, "Error", 500),
    ];
    const useQuery = (
      params: Operations.ListRolesForGroup.Params,
      initFetch?: boolean
    ) =>
      useWrappedQuery<Operations.ListRolesForGroup.Payload>(
        actionCreator(params),
        rules,
        initFetch
      );
    const useParameterizedQuery = () =>
      useWrappedParameterizedQuery<
        Operations.ListRolesForGroup.Payload,
        Operations.ListRolesForGroup.Params
      >(actionCreator, rules);
    const useRequest = () =>
      useWrappedRequest<
        Operations.ListRolesForGroup.Payload,
        Operations.ListRolesForGroup.Params
      >(actionCreator, rules);
    return { useQuery, useParameterizedQuery, useRequest };
  })();
  // POST /groups/{uuid}/roles/
  // Add a role to a group in the tenant
  const AddRoleToGroup = (() => {
    type ActionCreator = Action<Operations.AddRoleToGroup.Payload>;
    const actionCreator = (
      params: Operations.AddRoleToGroup.Params
    ): ActionCreator => {
      const path = "/api/rbac/v1/groups/{uuid}/roles/".replace(
        "{uuid}",
        params["uuid"].toString()
      );
      const query = {} as Record<string, any>;
      return actionBuilder("POST", path)
        .queryParams(query)
        .data({
          roles: params.body.roles,
        })
        .build();
    };
    const rules = [
      new ValidateRule(Operations.AddRoleToGroup.Response200, "unknown", 200),
      new ValidateRule(Schemas.__Empty, "__Empty", 400),
      new ValidateRule(Schemas.__Empty, "__Empty", 401),
      new ValidateRule(Schemas.Error403, "Error403", 403),
      new ValidateRule(Schemas.Error, "Error", 404),
      new ValidateRule(Schemas.Error, "Error", 500),
    ];
    const useMutation = () =>
      useWrappedMutation<
        Operations.AddRoleToGroup.Payload,
        Operations.AddRoleToGroup.Params
      >(actionCreator, rules);
    const useRequest = () =>
      useWrappedRequest<
        Operations.AddRoleToGroup.Payload,
        Operations.AddRoleToGroup.Params
      >(actionCreator, rules);
    return { useMutation, useRequest };
  })();
  // DELETE /groups/{uuid}/roles/
  // Remove a role from a group in the tenant
  const DeleteRoleFromGroup = (() => {
    type ActionCreator = Action<Operations.DeleteRoleFromGroup.Payload>;
    const actionCreator = (
      params: Operations.DeleteRoleFromGroup.Params
    ): ActionCreator => {
      const path = "/api/rbac/v1/groups/{uuid}/roles/".replace(
        "{uuid}",
        params["uuid"].toString()
      );
      const query = {} as Record<string, any>;
      if (params["roles"] !== undefined) {
        query["roles"] = params["roles"];
      }

      return actionBuilder("DELETE", path).queryParams(query).build();
    };
    const rules = [
      new ValidateRule(Schemas.__Empty, "__Empty", 204),
      new ValidateRule(Schemas.__Empty, "__Empty", 400),
      new ValidateRule(Schemas.__Empty, "__Empty", 401),
      new ValidateRule(Schemas.Error403, "Error403", 403),
      new ValidateRule(Schemas.Error, "Error", 404),
      new ValidateRule(Schemas.Error, "Error", 500),
    ];
    const useMutation = () =>
      useWrappedMutation<
        Operations.DeleteRoleFromGroup.Payload,
        Operations.DeleteRoleFromGroup.Params
      >(actionCreator, rules);
    const useRequest = () =>
      useWrappedRequest<
        Operations.DeleteRoleFromGroup.Payload,
        Operations.DeleteRoleFromGroup.Params
      >(actionCreator, rules);
    return { useMutation, useRequest };
  })();
  // GET /permissions/
  // List the permissions for a tenant
  const ListPermissions = (() => {
    type ActionCreator = Action<Operations.ListPermissions.Payload>;
    const actionCreator = (
      params: Operations.ListPermissions.Params = {}
    ): ActionCreator => {
      const path = "/api/rbac/v1/permissions/";
      const query = {} as Record<string, any>;
      if (params["limit"] !== undefined) {
        query["limit"] = params["limit"];
      }

      if (params["offset"] !== undefined) {
        query["offset"] = params["offset"];
      }

      if (params["orderBy"] !== undefined) {
        query["order_by"] = params["orderBy"];
      }

      if (params["application"] !== undefined) {
        query["application"] = params["application"];
      }

      if (params["resourceType"] !== undefined) {
        query["resource_type"] = params["resourceType"];
      }

      if (params["verb"] !== undefined) {
        query["verb"] = params["verb"];
      }

      if (params["permission"] !== undefined) {
        query["permission"] = params["permission"];
      }

      if (params["excludeGlobals"] !== undefined) {
        query["exclude_globals"] = params["excludeGlobals"];
      }

      if (params["excludeRoles"] !== undefined) {
        query["exclude_roles"] = params["excludeRoles"];
      }

      if (params["allowedOnly"] !== undefined) {
        query["allowed_only"] = params["allowedOnly"];
      }

      return actionBuilder("GET", path).queryParams(query).build();
    };
    const rules = [
      new ValidateRule(
        Schemas.PermissionPagination,
        "PermissionPagination",
        200
      ),
      new ValidateRule(Schemas.__Empty, "__Empty", 401),
      new ValidateRule(Schemas.Error403, "Error403", 403),
      new ValidateRule(Schemas.Error, "Error", 500),
    ];
    const useQuery = (
      params: Operations.ListPermissions.Params,
      initFetch?: boolean
    ) =>
      useWrappedQuery<Operations.ListPermissions.Payload>(
        actionCreator(params),
        rules,
        initFetch
      );
    const useParameterizedQuery = () =>
      useWrappedParameterizedQuery<
        Operations.ListPermissions.Payload,
        Operations.ListPermissions.Params
      >(actionCreator, rules);
    const useRequest = () =>
      useWrappedRequest<
        Operations.ListPermissions.Payload,
        Operations.ListPermissions.Params
      >(actionCreator, rules);
    return { useQuery, useParameterizedQuery, useRequest };
  })();
  // GET /permissions/options/
  // List the available options for fields of permissions for a tenant
  const ListPermissionOptions = (() => {
    type ActionCreator = Action<Operations.ListPermissionOptions.Payload>;
    const actionCreator = (
      params: Operations.ListPermissionOptions.Params
    ): ActionCreator => {
      const path = "/api/rbac/v1/permissions/options/";
      const query = {} as Record<string, any>;
      if (params["limit"] !== undefined) {
        query["limit"] = params["limit"];
      }

      if (params["offset"] !== undefined) {
        query["offset"] = params["offset"];
      }

      if (params["field"] !== undefined) {
        query["field"] = params["field"];
      }

      if (params["application"] !== undefined) {
        query["application"] = params["application"];
      }

      if (params["resourceType"] !== undefined) {
        query["resource_type"] = params["resourceType"];
      }

      if (params["verb"] !== undefined) {
        query["verb"] = params["verb"];
      }

      if (params["excludeGlobals"] !== undefined) {
        query["exclude_globals"] = params["excludeGlobals"];
      }

      if (params["allowedOnly"] !== undefined) {
        query["allowed_only"] = params["allowedOnly"];
      }

      return actionBuilder("GET", path).queryParams(query).build();
    };
    const rules = [
      new ValidateRule(
        Schemas.PermissionOptionsPagination,
        "PermissionOptionsPagination",
        200
      ),
      new ValidateRule(Schemas.__Empty, "__Empty", 401),
      new ValidateRule(Schemas.Error403, "Error403", 403),
      new ValidateRule(Schemas.Error, "Error", 500),
    ];
    const useQuery = (
      params: Operations.ListPermissionOptions.Params,
      initFetch?: boolean
    ) =>
      useWrappedQuery<Operations.ListPermissionOptions.Payload>(
        actionCreator(params),
        rules,
        initFetch
      );
    const useParameterizedQuery = () =>
      useWrappedParameterizedQuery<
        Operations.ListPermissionOptions.Payload,
        Operations.ListPermissionOptions.Params
      >(actionCreator, rules);
    const useRequest = () =>
      useWrappedRequest<
        Operations.ListPermissionOptions.Payload,
        Operations.ListPermissionOptions.Params
      >(actionCreator, rules);
    return { useQuery, useParameterizedQuery, useRequest };
  })();
  // GET /policies/
  // List the policies in the tenant
  const ListPolicies = (() => {
    type ActionCreator = Action<Operations.ListPolicies.Payload>;
    const actionCreator = (
      params: Operations.ListPolicies.Params = {}
    ): ActionCreator => {
      const path = "/api/rbac/v1/policies/";
      const query = {} as Record<string, any>;
      if (params["limit"] !== undefined) {
        query["limit"] = params["limit"];
      }

      if (params["offset"] !== undefined) {
        query["offset"] = params["offset"];
      }

      if (params["name"] !== undefined) {
        query["name"] = params["name"];
      }

      if (params["scope"] !== undefined) {
        query["scope"] = params["scope"];
      }

      if (params["groupName"] !== undefined) {
        query["group_name"] = params["groupName"];
      }

      if (params["groupUuid"] !== undefined) {
        query["group_uuid"] = params["groupUuid"];
      }

      if (params["orderBy"] !== undefined) {
        query["order_by"] = params["orderBy"];
      }

      return actionBuilder("GET", path).queryParams(query).build();
    };
    const rules = [
      new ValidateRule(Schemas.PolicyPagination, "PolicyPagination", 200),
      new ValidateRule(Schemas.__Empty, "__Empty", 401),
      new ValidateRule(Schemas.Error, "Error", 500),
    ];
    const useQuery = (
      params: Operations.ListPolicies.Params,
      initFetch?: boolean
    ) =>
      useWrappedQuery<Operations.ListPolicies.Payload>(
        actionCreator(params),
        rules,
        initFetch
      );
    const useParameterizedQuery = () =>
      useWrappedParameterizedQuery<
        Operations.ListPolicies.Payload,
        Operations.ListPolicies.Params
      >(actionCreator, rules);
    const useRequest = () =>
      useWrappedRequest<
        Operations.ListPolicies.Payload,
        Operations.ListPolicies.Params
      >(actionCreator, rules);
    return { useQuery, useParameterizedQuery, useRequest };
  })();
  // POST /policies/
  // Create a policy in a tenant
  const CreatePolicies = (() => {
    type ActionCreator = Action<Operations.CreatePolicies.Payload>;
    const actionCreator = (
      params: Operations.CreatePolicies.Params
    ): ActionCreator => {
      const path = "/api/rbac/v1/policies/";
      const query = {} as Record<string, any>;
      return actionBuilder("POST", path)
        .queryParams(query)
        .data(params.body)
        .build();
    };
    const rules = [
      new ValidateRule(Schemas.PolicyExtended, "PolicyExtended", 201),
      new ValidateRule(Schemas.__Empty, "__Empty", 401),
      new ValidateRule(Schemas.Error, "Error", 500),
    ];
    const useMutation = () =>
      useWrappedMutation<
        Operations.CreatePolicies.Payload,
        Operations.CreatePolicies.Params
      >(actionCreator, rules);
    const useRequest = () =>
      useWrappedRequest<
        Operations.CreatePolicies.Payload,
        Operations.CreatePolicies.Params
      >(actionCreator, rules);
    return { useMutation, useRequest };
  })();
  // GET /policies/{uuid}/
  // Get a policy in the tenant
  const GetPolicy = (() => {
    type ActionCreator = Action<Operations.GetPolicy.Payload>;
    const actionCreator = (
      params: Operations.GetPolicy.Params
    ): ActionCreator => {
      const path = "/api/rbac/v1/policies/{uuid}/".replace(
        "{uuid}",
        params["uuid"].toString()
      );
      const query = {} as Record<string, any>;
      return actionBuilder("GET", path).queryParams(query).build();
    };
    const rules = [
      new ValidateRule(Schemas.PolicyExtended, "PolicyExtended", 200),
      new ValidateRule(Schemas.__Empty, "__Empty", 401),
      new ValidateRule(Schemas.Error, "Error", 404),
      new ValidateRule(Schemas.Error, "Error", 500),
    ];
    const useQuery = (
      params: Operations.GetPolicy.Params,
      initFetch?: boolean
    ) =>
      useWrappedQuery<Operations.GetPolicy.Payload>(
        actionCreator(params),
        rules,
        initFetch
      );
    const useParameterizedQuery = () =>
      useWrappedParameterizedQuery<
        Operations.GetPolicy.Payload,
        Operations.GetPolicy.Params
      >(actionCreator, rules);
    const useRequest = () =>
      useWrappedRequest<
        Operations.GetPolicy.Payload,
        Operations.GetPolicy.Params
      >(actionCreator, rules);
    return { useQuery, useParameterizedQuery, useRequest };
  })();
  // PUT /policies/{uuid}/
  // Update a policy in the tenant
  const UpdatePolicy = (() => {
    type ActionCreator = Action<Operations.UpdatePolicy.Payload>;
    const actionCreator = (
      params: Operations.UpdatePolicy.Params
    ): ActionCreator => {
      const path = "/api/rbac/v1/policies/{uuid}/".replace(
        "{uuid}",
        params["uuid"].toString()
      );
      const query = {} as Record<string, any>;
      return actionBuilder("PUT", path)
        .queryParams(query)
        .data(params.body)
        .build();
    };
    const rules = [
      new ValidateRule(Schemas.PolicyExtended, "PolicyExtended", 200),
      new ValidateRule(Schemas.__Empty, "__Empty", 401),
      new ValidateRule(Schemas.Error, "Error", 404),
      new ValidateRule(Schemas.Error, "Error", 500),
    ];
    const useMutation = () =>
      useWrappedMutation<
        Operations.UpdatePolicy.Payload,
        Operations.UpdatePolicy.Params
      >(actionCreator, rules);
    const useRequest = () =>
      useWrappedRequest<
        Operations.UpdatePolicy.Payload,
        Operations.UpdatePolicy.Params
      >(actionCreator, rules);
    return { useMutation, useRequest };
  })();
  // DELETE /policies/{uuid}/
  // Delete a policy in the tenant
  const DeletePolicy = (() => {
    type ActionCreator = Action<Operations.DeletePolicy.Payload>;
    const actionCreator = (
      params: Operations.DeletePolicy.Params
    ): ActionCreator => {
      const path = "/api/rbac/v1/policies/{uuid}/".replace(
        "{uuid}",
        params["uuid"].toString()
      );
      const query = {} as Record<string, any>;
      return actionBuilder("DELETE", path).queryParams(query).build();
    };
    const rules = [
      new ValidateRule(Schemas.__Empty, "__Empty", 204),
      new ValidateRule(Schemas.__Empty, "__Empty", 401),
      new ValidateRule(Schemas.Error, "Error", 404),
      new ValidateRule(Schemas.Error, "Error", 500),
    ];
    const useMutation = () =>
      useWrappedMutation<
        Operations.DeletePolicy.Payload,
        Operations.DeletePolicy.Params
      >(actionCreator, rules);
    const useRequest = () =>
      useWrappedRequest<
        Operations.DeletePolicy.Payload,
        Operations.DeletePolicy.Params
      >(actionCreator, rules);
    return { useMutation, useRequest };
  })();
  // GET /principals/
  // List the principals for a tenant
  const ListPrincipals = (() => {
    type ActionCreator = Action<Operations.ListPrincipals.Payload>;
    const actionCreator = (
      params: Operations.ListPrincipals.Params = {}
    ): ActionCreator => {
      const path = "/api/rbac/v1/principals/";
      const query = {} as Record<string, any>;
      if (params["limit"] !== undefined) {
        query["limit"] = params["limit"];
      }

      if (params["offset"] !== undefined) {
        query["offset"] = params["offset"];
      }

      if (params["matchCriteria"] !== undefined) {
        query["match_criteria"] = params["matchCriteria"];
      }

      if (params["usernames"] !== undefined) {
        query["usernames"] = params["usernames"];
      }

      if (params["sortOrder"] !== undefined) {
        query["sort_order"] = params["sortOrder"];
      }

      if (params["email"] !== undefined) {
        query["email"] = params["email"];
      }

      if (params["status"] !== undefined) {
        query["status"] = params["status"];
      }

      if (params["adminOnly"] !== undefined) {
        query["admin_only"] = params["adminOnly"];
      }

      if (params["orderBy"] !== undefined) {
        query["order_by"] = params["orderBy"];
      }

      return actionBuilder("GET", path).queryParams(query).build();
    };
    const rules = [
      new ValidateRule(Schemas.PrincipalPagination, "PrincipalPagination", 200),
      new ValidateRule(Schemas.__Empty, "__Empty", 401),
      new ValidateRule(Schemas.Error403, "Error403", 403),
      new ValidateRule(Schemas.Error, "Error", 500),
    ];
    const useQuery = (
      params: Operations.ListPrincipals.Params,
      initFetch?: boolean
    ) =>
      useWrappedQuery<Operations.ListPrincipals.Payload>(
        actionCreator(params),
        rules,
        initFetch
      );
    const useParameterizedQuery = () =>
      useWrappedParameterizedQuery<
        Operations.ListPrincipals.Payload,
        Operations.ListPrincipals.Params
      >(actionCreator, rules);
    const useRequest = () =>
      useWrappedRequest<
        Operations.ListPrincipals.Payload,
        Operations.ListPrincipals.Params
      >(actionCreator, rules);
    return { useQuery, useParameterizedQuery, useRequest };
  })();
  // GET /roles/
  // List the roles for a tenant
  const ListRoles = (() => {
    type ActionCreator = Action<Operations.ListRoles.Payload>;
    const actionCreator = (
      params: Operations.ListRoles.Params = {}
    ): ActionCreator => {
      const path = "/api/rbac/v1/roles/";
      const query = {} as Record<string, any>;
      if (params["limit"] !== undefined) {
        query["limit"] = params["limit"];
      }

      if (params["offset"] !== undefined) {
        query["offset"] = params["offset"];
      }

      if (params["name"] !== undefined) {
        query["name"] = params["name"];
      }

      if (params["system"] !== undefined) {
        query["system"] = params["system"];
      }

      if (params["displayName"] !== undefined) {
        query["display_name"] = params["displayName"];
      }

      if (params["nameMatch"] !== undefined) {
        query["name_match"] = params["nameMatch"];
      }

      if (params["scope"] !== undefined) {
        query["scope"] = params["scope"];
      }

      if (params["orderBy"] !== undefined) {
        query["order_by"] = params["orderBy"];
      }

      if (params["addFields"] !== undefined) {
        query["add_fields"] = params["addFields"];
      }

      if (params["username"] !== undefined) {
        query["username"] = params["username"];
      }

      if (params["application"] !== undefined) {
        query["application"] = params["application"];
      }

      if (params["permission"] !== undefined) {
        query["permission"] = params["permission"];
      }

      return actionBuilder("GET", path).queryParams(query).build();
    };
    const rules = [
      new ValidateRule(
        Schemas.RolePaginationDynamic,
        "RolePaginationDynamic",
        200
      ),
      new ValidateRule(Schemas.__Empty, "__Empty", 401),
      new ValidateRule(Schemas.Error403, "Error403", 403),
      new ValidateRule(Schemas.Error, "Error", 500),
    ];
    const useQuery = (
      params: Operations.ListRoles.Params,
      initFetch?: boolean
    ) =>
      useWrappedQuery<Operations.ListRoles.Payload>(
        actionCreator(params),
        rules,
        initFetch
      );
    const useParameterizedQuery = () =>
      useWrappedParameterizedQuery<
        Operations.ListRoles.Payload,
        Operations.ListRoles.Params
      >(actionCreator, rules);
    const useRequest = () =>
      useWrappedRequest<
        Operations.ListRoles.Payload,
        Operations.ListRoles.Params
      >(actionCreator, rules);
    return { useQuery, useParameterizedQuery, useRequest };
  })();
  // POST /roles/
  // Create a roles for a tenant
  const CreateRoles = (() => {
    type ActionCreator = Action<Operations.CreateRoles.Payload>;
    const actionCreator = (
      params: Operations.CreateRoles.Params
    ): ActionCreator => {
      const path = "/api/rbac/v1/roles/";
      const query = {} as Record<string, any>;
      return actionBuilder("POST", path)
        .queryParams(query)
        .data(params.body)
        .build();
    };
    const rules = [
      new ValidateRule(Schemas.RoleWithAccess, "RoleWithAccess", 201),
      new ValidateRule(Schemas.__Empty, "__Empty", 401),
      new ValidateRule(Schemas.Error403, "Error403", 403),
      new ValidateRule(Schemas.Error, "Error", 500),
    ];
    const useMutation = () =>
      useWrappedMutation<
        Operations.CreateRoles.Payload,
        Operations.CreateRoles.Params
      >(actionCreator, rules);
    const useRequest = () =>
      useWrappedRequest<
        Operations.CreateRoles.Payload,
        Operations.CreateRoles.Params
      >(actionCreator, rules);
    return { useMutation, useRequest };
  })();
  // GET /roles/{uuid}/
  // Get a role in the tenant
  const GetRole = (() => {
    type ActionCreator = Action<Operations.GetRole.Payload>;
    const actionCreator = (
      params: Operations.GetRole.Params
    ): ActionCreator => {
      const path = "/api/rbac/v1/roles/{uuid}/".replace(
        "{uuid}",
        params["uuid"].toString()
      );
      const query = {} as Record<string, any>;
      if (params["scope"] !== undefined) {
        query["scope"] = params["scope"];
      }

      return actionBuilder("GET", path).queryParams(query).build();
    };
    const rules = [
      new ValidateRule(Schemas.RoleWithAccess, "RoleWithAccess", 200),
      new ValidateRule(Schemas.__Empty, "__Empty", 401),
      new ValidateRule(Schemas.Error403, "Error403", 403),
      new ValidateRule(Schemas.Error, "Error", 404),
      new ValidateRule(Schemas.Error, "Error", 500),
    ];
    const useQuery = (params: Operations.GetRole.Params, initFetch?: boolean) =>
      useWrappedQuery<Operations.GetRole.Payload>(
        actionCreator(params),
        rules,
        initFetch
      );
    const useParameterizedQuery = () =>
      useWrappedParameterizedQuery<
        Operations.GetRole.Payload,
        Operations.GetRole.Params
      >(actionCreator, rules);
    const useRequest = () =>
      useWrappedRequest<Operations.GetRole.Payload, Operations.GetRole.Params>(
        actionCreator,
        rules
      );
    return { useQuery, useParameterizedQuery, useRequest };
  })();
  // PUT /roles/{uuid}/
  // Update a Role in the tenant
  const UpdateRole = (() => {
    type ActionCreator = Action<Operations.UpdateRole.Payload>;
    const actionCreator = (
      params: Operations.UpdateRole.Params
    ): ActionCreator => {
      const path = "/api/rbac/v1/roles/{uuid}/".replace(
        "{uuid}",
        params["uuid"].toString()
      );
      const query = {} as Record<string, any>;
      return actionBuilder("PUT", path)
        .queryParams(query)
        .data(params.body)
        .build();
    };
    const rules = [
      new ValidateRule(Schemas.__Empty, "__Empty", 200),
      new ValidateRule(Schemas.__Empty, "__Empty", 401),
      new ValidateRule(Schemas.Error403, "Error403", 403),
      new ValidateRule(Schemas.Error, "Error", 404),
      new ValidateRule(Schemas.Error, "Error", 500),
    ];
    const useMutation = () =>
      useWrappedMutation<
        Operations.UpdateRole.Payload,
        Operations.UpdateRole.Params
      >(actionCreator, rules);
    const useRequest = () =>
      useWrappedRequest<
        Operations.UpdateRole.Payload,
        Operations.UpdateRole.Params
      >(actionCreator, rules);
    return { useMutation, useRequest };
  })();
  // DELETE /roles/{uuid}/
  // Delete a role in the tenant
  const DeleteRole = (() => {
    type ActionCreator = Action<Operations.DeleteRole.Payload>;
    const actionCreator = (
      params: Operations.DeleteRole.Params
    ): ActionCreator => {
      const path = "/api/rbac/v1/roles/{uuid}/".replace(
        "{uuid}",
        params["uuid"].toString()
      );
      const query = {} as Record<string, any>;
      return actionBuilder("DELETE", path).queryParams(query).build();
    };
    const rules = [
      new ValidateRule(Schemas.__Empty, "__Empty", 204),
      new ValidateRule(Schemas.__Empty, "__Empty", 401),
      new ValidateRule(Schemas.Error403, "Error403", 403),
      new ValidateRule(Schemas.Error, "Error", 404),
      new ValidateRule(Schemas.Error, "Error", 500),
    ];
    const useMutation = () =>
      useWrappedMutation<
        Operations.DeleteRole.Payload,
        Operations.DeleteRole.Params
      >(actionCreator, rules);
    const useRequest = () =>
      useWrappedRequest<
        Operations.DeleteRole.Payload,
        Operations.DeleteRole.Params
      >(actionCreator, rules);
    return { useMutation, useRequest };
  })();
  // GET /roles/{uuid}/access/
  // Get access for a role in the tenant
  const GetRoleAccess = (() => {
    type ActionCreator = Action<Operations.GetRoleAccess.Payload>;
    const actionCreator = (
      params: Operations.GetRoleAccess.Params
    ): ActionCreator => {
      const path = "/api/rbac/v1/roles/{uuid}/access/".replace(
        "{uuid}",
        params["uuid"].toString()
      );
      const query = {} as Record<string, any>;
      if (params["limit"] !== undefined) {
        query["limit"] = params["limit"];
      }

      if (params["offset"] !== undefined) {
        query["offset"] = params["offset"];
      }

      return actionBuilder("GET", path).queryParams(query).build();
    };
    const rules = [
      new ValidateRule(Schemas.AccessPagination, "AccessPagination", 200),
      new ValidateRule(Schemas.__Empty, "__Empty", 401),
      new ValidateRule(Schemas.Error403, "Error403", 403),
      new ValidateRule(Schemas.Error, "Error", 404),
      new ValidateRule(Schemas.Error, "Error", 500),
    ];
    const useQuery = (
      params: Operations.GetRoleAccess.Params,
      initFetch?: boolean
    ) =>
      useWrappedQuery<Operations.GetRoleAccess.Payload>(
        actionCreator(params),
        rules,
        initFetch
      );
    const useParameterizedQuery = () =>
      useWrappedParameterizedQuery<
        Operations.GetRoleAccess.Payload,
        Operations.GetRoleAccess.Params
      >(actionCreator, rules);
    const useRequest = () =>
      useWrappedRequest<
        Operations.GetRoleAccess.Payload,
        Operations.GetRoleAccess.Params
      >(actionCreator, rules);
    return { useQuery, useParameterizedQuery, useRequest };
  })();
  // GET /status/
  // Obtain server status
  const GetStatus = (() => {
    type ActionCreator = Action<Operations.GetStatus.Payload>;
    const actionCreator = (): ActionCreator => {
      const path = "/api/rbac/v1/status/";
      const query = {} as Record<string, any>;
      return actionBuilder("GET", path).queryParams(query).build();
    };
    const rules = [
      new ValidateRule(Schemas.Status, "Status", 200),
      new ValidateRule(Schemas.Error, "Error", 500),
    ];
    const useQuery = (
      params: Operations.GetStatus.Params,
      initFetch?: boolean
    ) =>
      useWrappedQuery<Operations.GetStatus.Payload>(
        actionCreator(params),
        rules,
        initFetch
      );
    const useParameterizedQuery = () =>
      useWrappedParameterizedQuery<
        Operations.GetStatus.Payload,
        Operations.GetStatus.Params
      >(actionCreator, rules);
    const useRequest = () =>
      useWrappedRequest<
        Operations.GetStatus.Payload,
        Operations.GetStatus.Params
      >(actionCreator, rules);
    return { useQuery, useParameterizedQuery, useRequest };
  })();
  return {
    GetPrincipalAccess,
    ListCrossAccountRequests,
    CreateCrossAccountRequests,
    GetCrossAccountRequest,
    PutCrossAccountRequest,
    ListGroups,
    CreateGroup,
    GetGroup,
    UpdateGroup,
    DeleteGroup,
    GetPrincipalsFromGroup,
    AddPrincipalToGroup,
    DeletePrincipalFromGroup,
    ListRolesForGroup,
    AddRoleToGroup,
    DeleteRoleFromGroup,
    ListPermissions,
    ListPermissionOptions,
    ListPolicies,
    CreatePolicies,
    GetPolicy,
    UpdatePolicy,
    DeletePolicy,
    ListPrincipals,
    ListRoles,
    CreateRoles,
    GetRole,
    UpdateRole,
    DeleteRole,
    GetRoleAccess,
    GetStatus,
  };
};

export const client = createClient();
