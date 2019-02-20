import { Person } from '../../../shared-core/models/person.model';
import { Address } from '../../../shared-core/models/address.model';

export class Registrant extends Person {

  /** Parts of a person's name */
  public preferredFirstName: string;
  public preferredMiddleName: string;
  public preferredLastName: string;

  /** Identify and mailing addresses */
  public address: Address = new Address();
  public mailAddress: Address = new Address();

  /* Copy function */
  copy( object: Registrant ) {
    super.copy( object );
    this.preferredFirstName = object.preferredFirstName;
    this.preferredMiddleName = object.preferredMiddleName;
    this.preferredLastName = object.preferredLastName;

    this.address.copy( object.address );
    this.mailAddress.copy( object.mailAddress );
  }
}
