// This file is the result of an object-oriented design session.  It is used to
// generate UML diagrams and JSON-schemas.  See design-readme.md for more
// details.


//-----------------------------------------------------------------------------
// BASE
//-----------------------------------------------------------------------------

//FIXME: Abstract class. Had to remove abstract for JSON schema generation.
class Base {
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
        return this.sites.filter(x => x.status === SiteAccessStatus.ACTIVE);
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

//FIXME: Abstract class. Had to remove abstract for JSON schema generation.
class Role extends Base {
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
    PENDING = "Pending",
    ACTIVE = "Active",
    EXPIRING = "Expiring",
    INACTIVE_OR_REJECTED = "Inactive or rejected"
}

enum Colleges {
    None = "None",
    CPSBC = "College of Physicians and Surgeons of BC (CPSBC",
    CPBC = "College of Pharmacists Of BC (CPBC)",
    CRNBC = "College of Registered Nurses of BC (CRNBC)"
}

class License {
    number: string;
    licenseClass: LicenseClasses;
    expiry: Date;
}

enum LicenseClasses {
    FULL_PHARMACIST = "Full pharmacist"
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
    URGENT = "Urgent",
    NORMAL = "Normal",
}
enum PrimeRequestStatus {
    RESUBMISSION = "Resubmission",
    SAVED_FOR_COMPLETION = "Saved for completion",
    RETURNED_BY_APPLICANT = "Returned by applicant",
    MANUAL_REVIEW = "Manual review",
    PROVISIONING = "Provisioning"
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
    PENDING_APPROVAL = "Pending Approval",
    INITIATED = "Initiated",
    RETURNED_TO_APPLICANT = "Returned to applicant",
    ACTIVE = "Active"
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
