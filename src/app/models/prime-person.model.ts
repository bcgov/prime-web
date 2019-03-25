import { Person, Address } from 'moh-common-lib/models';

export class PrimePerson extends Person {
  /** Parts of a person's name */
  public preferredFirstName: string;
  public preferredMiddleName: string;
  public preferredLastName: string;

  /** Identify and mailing addresses */
  public address: Address = new Address();
  public mailAddress: Address = new Address();
  public identityIsMailingAddress = true;


  /* Copy function */
  copy(object: PrimePerson) {
    super.copy(object);
    this.preferredFirstName = object.preferredFirstName;
    this.preferredMiddleName = object.preferredMiddleName;
    this.preferredLastName = object.preferredLastName;

    this.address.copy(object.address);
    this.mailAddress.copy(object.mailAddress);
  }
}
