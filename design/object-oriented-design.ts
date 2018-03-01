// Use JSON Schema
// http://json-schema.org/implementations.html
// https://github.com/krg7880/json-schema-generator
// maybe: https://github.com/YousefED/typescript-json-schema

/**
 * TODO:
 *
 *  - run json-schema generator
 *  - run tsuml to generate UML
 *
 *
 * Steps to generate UML:
 *  - run tsuml on this file to generate .puml
 *  - manually copy `enum` statements into  .puml
 *  - use plantUML to generate
 */



//-----------------------------------------------------------------------------
// BASE
//-----------------------------------------------------------------------------

abstract class Base {
    id: guid;
}
interface guid { }

//-----------------------------------------------------------------------------
// PERSON
//-----------------------------------------------------------------------------

class Person extends Base {
    userId: PrimeUserID; //human-readable, like a user-name - "JSmith"
    name: Name;
    address: Address;
    dateOfBirth: Date;
    phone: PhoneNumber;

    //The different roles the person may have
    user?: User;
    verifier?: Verifier;
    organizationAuthority?: OrganizationAuthority;
    provisioner?: Provisioner;

    // ALL sites, including expired/rejected.
    sites: SiteAccess[];
    get activeSites(): SiteAccess[] {
        return this.sites.filter(x => x.status === SiteAccessStatus.ACTVE);
    }

    requests: PrimeRequest[];
}

class Name {
    firstName: string;
    lastName: string;
    middleName: string;
    get fullName(): string { return this.firstName + this.lastName }
}

interface Address {
    street: string;
    postal: string;
    //you get the idea. not filling out the rest.
}

interface PhoneNumber { }
interface PrimeUserID { }

//-----------------------------------------------------------------------------
// ROLES
//-----------------------------------------------------------------------------

abstract class Role extends Base {
    status: RoleStatus;
    // Person is a circular reference for runtime convenience and does NOT need
    // to really be modelled in the JSON. We must handle the circular reference
    // when JSONifying. This makes it possible to, e.g. just pass a Verifier
    // object, and then easily get their name.
    person: Person;
    type: User | Verifier | OrganizationAuthority | Provisioner;
    selfDeclarations: SelfDeclaration[];
}

class User extends Role {
    college: Colleges[];
    license: License;
    isDeviceProvider: boolean;
    PoSUserId: string;
}
class Verifier extends Role { }
class OrganizationAuthority extends Role { } //aka "OA" or "Site Admin"
class Provisioner extends Role { }

// Note - A user may have different statuses for each role (e.g. active user, pending verifier)
enum RoleStatus {
    PENDING,
    ACTIVE,
    EXPIRING,
    INACTIVE_OR_REJECTED
}

enum Colleges {
    None,
    /**College of Physicians and Surgeons of BC (CPSBC)*/
    CPSBC,
    /**College of Pharmacists Of BC (CPBC)*/
    CPBC,
    /**College of Registered Nurses of BC (CRNBC)*/
    CRNBC,
}

class License {
    number: string;
    licenseClass: LicenseClasses;
    expiry: Date;
}

enum LicenseClasses {
    FULL_PHARMACIST
}

//-----------------------------------------------------------------------------
// PRIME REQUESTS
//-----------------------------------------------------------------------------


//e.g. requesting to be enrolled. not to be confused with an HTTP request
class PrimeRequest extends Base {
    applicant: Role; //can be any of User/Provisioner/Verifier/OA
    imitationDate: Date;
    priority: PrimeRequestPriority;
    status: PrimeRequestStatus;
}
class ProvisionerChange extends PrimeRequest { }
class ProvisionerEnrollment extends PrimeRequest { }
class VerifierChange extends PrimeRequest { }
class VerifierEnrollment extends PrimeRequest { }
enum PrimeRequestPriority {
    URGENT,
    NORMAL
}
enum PrimeRequestStatus {
    RESUBMISSION,
    SAVED_FOR_COMPLETION,
    RETURNED_BY_APPLICANT,
    MANUAL_REVIEW,
    PROVISIONING
}

//-----------------------------------------------------------------------------
// SITES
//-----------------------------------------------------------------------------

// Locations for PRIME.
class Site extends Base {
    name: string;
    address: Address;
}

// The record of a specific user's access to a specific site
class SiteAccess extends Base {
    site: Site;
    person: Role;
    status: SiteAccessStatus;
    reason: string;
    startDate: Date;
    endDate: Date;
    vendor: Vendor;
    personalAccessToPharmaNet: boolean;
    verifier: Verifier; // "by" in xlsx designs -  responsible for approving

    // the value must be a class itself (subclassing Role) - not an instance!
    // e.g. x.privilege = Verifier
    privilege: typeof Role;
}

enum SiteAccessStatus {
    PENDING_APPROVAL,
    INITIATED,
    RETURNED_TO_APPLICANT,
    ACTVE
}

class Vendor extends Base { }


//-----------------------------------------------------------------------------
// MISC
//-----------------------------------------------------------------------------


class Group<T> extends Base {
    find() { };
    contains() { };
    members: T[];
}
class NamedCollection extends Group<Site> { };
class PeopleGroup extends Group<Person> { };


class SelfDeclaration {
    question: string;
    userAnswer: boolean;
    userDetails: string;
}
