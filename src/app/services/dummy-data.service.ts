import { Injectable } from '@angular/core';
import { Applicant } from '../models/applicant.model';
import { NamedCollection } from '../models/named-collections.interface';

@Injectable()
export class DummyDataService {

  constructor() { }

  generateApplicantDummyData(){
    return {
      "licenseExpiry":{
         "day":12,
         "month":10,
         "year":2018
      },
      "dateOfBirth":{
         "month":6,
         "day":11,
         "year":1991
      },
      "requestStartDate":{
         "month":9,
         "day":6,
         "year":2017
      },
      "requestEndDate":{

      },
      "securityQuestions":[
         {
            "question":"What was your first pet's name?",
            "answer":"Tie"
         },
         {
            "question":"What was the make of your first car?",
            "answer":"Blucy"
         },
         {
            "question":"What was the last name of your favourite teacher?",
            "answer":"Fehr"
         }
      ],
      "consentInfoCollection":false,
      "address":{
         "streetNum":"845",
         "streetSuffix":"B",
         "suite":"704",
         "street":"Yates",
         "streetType":"Avenue",
         "streetDirection":"North",
         "city":"Victoria",
         "province":"British Columbia",
         "country":"Canada"
      },
      "college":[
         "P1",
         "96"
      ],
      "advancedPracticeCerts":[
         "Remote Practice",
         "Reproductive Care"
      ],
      "namedCollections":[
         {
            "id":0,
            "selected":false,
            "namedCollection":"VIHA",
            "siteName":"Island Sexual Health",
            "city":"Saanich",
            "postal":"V6R 2YK",
            "vendor":"Merck",
            "siteType":"Emergency Department"
         },
         {
            "id":1,
            "selected":false,
            "namedCollection":"Island Sexual Health",
            "siteName":"Victoria General Hospital",
            "city":"Colwood",
            "postal":"V6R 2YK",
            "vendor":"GlaxoSmithKline",
            "siteType":"Clinic"
         },
         {
            "id":2,
            "selected":false,
            "namedCollection":"VIHA",
            "siteName":"Royal Jubilee",
            "city":"Oak Bay",
            "postal":"V2S R2M",
            "vendor":"Pfizer",
            "siteType":"Emergency Department"
         },
         {
            "id":3,
            "selected":false,
            "namedCollection":"Island Sexual Health",
            "siteName":"845 Jacklin",
            "city":"Victoria",
            "postal":"V2S R2M",
            "vendor":"Merck",
            "siteType":"Emergency Department"
         },
         {
            "id":4,
            "selected":false,
            "namedCollection":"Pharmasave",
            "siteName":"845 Jacklin",
            "city":"Langford",
            "postal":"V6R 2YK",
            "vendor":"Bayer",
            "siteType":"Pharmacy"
         },
         {
            "id":5,
            "selected":false,
            "namedCollection":"Pharmasave",
            "siteName":"Victoria General Hospital",
            "city":"Sidney",
            "postal":"V9B 1Z2",
            "vendor":"GlaxoSmithKline",
            "siteType":"Hospital"
         },
         {
            "id":6,
            "selected":false,
            "namedCollection":"Pharmasave",
            "siteName":"Victoria General Hospital",
            "city":"Langford",
            "postal":"V6R 2YK",
            "vendor":"Bayer",
            "siteType":"Hospital"
         },
         {
            "id":7,
            "selected":false,
            "namedCollection":"Walmart",
            "siteName":"Island Sexual Health",
            "city":"Sidney",
            "postal":"V9B 1Z2",
            "vendor":"Rochester",
            "siteType":"Pharmacy"
         },
         {
            "id":8,
            "selected":false,
            "namedCollection":"Walmart",
            "siteName":"845 Jacklin",
            "city":"Oak Bay",
            "postal":"V9B 1Z2",
            "vendor":"Pfizer",
            "siteType":"Medical Practice"
         },
         {
            "id":9,
            "selected":false,
            "namedCollection":"Walmart",
            "siteName":"Royal Jubilee",
            "city":"Langford",
            "postal":"V2S R2M",
            "vendor":"Rochester",
            "siteType":"Medical Practice"
         },
         {
            "id":10,
            "selected":false,
            "namedCollection":"Walmart",
            "siteName":"Victoria General Hospital",
            "city":"Sidney",
            "postal":"V2S R2M",
            "vendor":"Merck",
            "siteType":"Hospital"
         },
         {
            "id":11,
            "selected":false,
            "namedCollection":"Pharmasave",
            "siteName":"Victoria General Hospital",
            "city":"Victoria",
            "postal":"V4T 1UA",
            "vendor":"Bayer",
            "siteType":"Hospital"
         },
         {
            "id":12,
            "selected":false,
            "namedCollection":"VIHA",
            "siteName":"Pacific Health Clinic",
            "city":"Oak Bay",
            "postal":"V4T 1UA",
            "vendor":"Rochester",
            "siteType":"Medical Practice"
         },
         {
            "id":13,
            "selected":false,
            "namedCollection":"Pharmasave",
            "siteName":"845 Jacklin",
            "city":"Sidney",
            "postal":"V9B 1Z2",
            "vendor":"Rochester",
            "siteType":"Pharmacy"
         },
         {
            "id":14,
            "selected":false,
            "namedCollection":"Pharmasave",
            "siteName":"Island Sexual Health",
            "city":"Colwood",
            "postal":"V9B 1Z2",
            "vendor":"Merck",
            "siteType":"Pharmacy"
         },
         {
            "id":15,
            "selected":false,
            "namedCollection":"Walmart",
            "siteName":"Pacific Health Clinic",
            "city":"Colwood",
            "postal":"V6R 2YK",
            "vendor":"Rochester",
            "siteType":"Medical Practice"
         },
         {
            "id":16,
            "selected":false,
            "namedCollection":"Walmart",
            "siteName":"845 Jacklin",
            "city":"Colwood",
            "postal":"V6R 2YK",
            "vendor":"GlaxoSmithKline",
            "siteType":"Pharmacy"
         },
         {
            "id":17,
            "selected":false,
            "namedCollection":"Island Sexual Health",
            "siteName":"845 Jacklin",
            "city":"Oak Bay",
            "postal":"V2S R2M",
            "vendor":"Pfizer",
            "siteType":"Hospital"
         },
         {
            "id":18,
            "selected":false,
            "namedCollection":"VIHA",
            "siteName":"Victoria General Hospital",
            "city":"Victoria",
            "postal":"V9B 1Z2",
            "vendor":"Rochester",
            "siteType":"Clinic"
         },
         {
            "id":19,
            "selected":false,
            "namedCollection":"VIHA",
            "siteName":"Royal Jubilee",
            "city":"Saanich",
            "postal":"V9B 1Z2",
            "vendor":"Pfizer",
            "siteType":"Emergency Department"
         }
      ],
      "willPersonallyAccessFromSites":false,
      "firstName":"Bill",
      "middleName":"Henry",
      "lastName":"Gates",
      "phoneNumber":"250-555-0609",
      "emailAddress":"billg@microsoft.com",
      "altPhoneNumber":"250-555-7511",
      "altEmailAddress":"bill.gates@hotmail.com",
      "hasInformationContraventionOrder":undefined,
      "informationContraventionOrderDetails":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. In quas inventore consequuntur tempore facere exercitationem numquam necessitatibus nostrum eaque provident odio quasi, libero adipisci nihil magnam harum excepturi eos voluptatibus!",
      "hasBeenSuspended":undefined,
      "beenSuspendedDetails":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. In quas inventore consequuntur tempore facere exercitationem numquam necessitatibus nostrum eaque provident odio quasi, libero adipisci nihil magnam harum excepturi eos voluptatibus.",
      "hasHadLimitsOrConditions":undefined,
      "hadLimitsOrConditionsDetails":"  Doloremque voluptatum facilis sint velit numquam magnam, tempora aspernatur exercitationem, ut aliquid iste laboriosam blanditiis iure soluta deserunt consequatur repellendus similique. Id error similique voluptatem iusto dolor temporibus nulla nihil!\n  Sequi eligendi praesentium itaque veritatis minus, distinctio repellendus aperiam et aliquid nam, veniam optio perferendis! Quod officiis quaerat aut quo porro enim molestiae corporis. Dignissimos deserunt rem maiores est modi.\n  Voluptatibus ut ducimus neque repellendus voluptate eos hic sequi recusandae, exercitationem rerum aliquid, aut reprehenderit libero totam labore numquam unde quasi quae cumque laudantium. Pariatur, expedita. Labore voluptatem explicabo ut.",
      "hasPharmaNetEverRevoked":undefined,
      "PharmaNetEverRevokedDetails":"Eaque consequatur, adipisci nobis doloribus dolore libero accusamus, illo laborum optio consectetur similique explicabo deserunt aperiam accusantium autem illum nam doloremque. Ipsa tempore veritatis alias, voluptates soluta doloribus eveniet vero!",
      "hasRevocationBeenResolved":undefined,
      "revocationBeenResolvedDetails":"Non ab ratione voluptates beatae harum, esse amet accusamus ea. Exercitationem fugit illo at quisquam, deserunt, non eveniet qui accusantium voluptas reprehenderit nihil tempore molestiae, explicabo natus facilis eos. Ut?"
    }
  }

  useApplicantDummyData(applicant: Applicant) : Applicant  {
    const data = this.generateApplicantDummyData();

    for (let prop in data){
      applicant[prop] = data[prop];
    }

    return applicant;
  }

  /**
   * Randomly generate NamedCollections, used for Site Access.
   * Each cell is randomized, so the whole row may not be cohesive.
   *
   * @param numberOfRows Number of NamedCollections to generate
   */
  generateNamedCollections(numberOfRows: number) : NamedCollection[]{
    const COLLECTIONS = ["Pharmasave", "Walmart", "VIHA", "Island Sexual Health"];
    const SITENAME = ["845 Jacklin", "Royal Jubilee", "Victoria General Hospital", "Pacific Health Clinic", "Island Sexual Health"];
    const CITY = ["Victoria", "Langford", "Saanich", "Sidney", "Colwood", "Oak Bay"];
    const VENDOR = ["GlaxoSmithKline", "Bayer", "Rochester", "Pfizer", "Merck", "Johnson & Johnson"]
    const SITETYPE = ["Medical Practice", "Emergency Department", "Clinic", "Hospital", "Pharmacy"];
    const POSTAL = ["V9B 1Z2", "V6R 2YK", "V4T 1UA", "V2S R2M"]

    let result = [];

    for (var index = 0; index < numberOfRows; index++) {
      result.push({
        id: index,
        selected: false,
        namedCollection: this.getRandomElFromArray(COLLECTIONS),
        siteName: this.getRandomElFromArray(SITENAME),
        city: this.getRandomElFromArray(CITY),
        postal: this.getRandomElFromArray(POSTAL),
        vendor: this.getRandomElFromArray(VENDOR),
        siteType: this.getRandomElFromArray(SITETYPE)
      })
    }

    return result;
  }

  private getRandomElFromArray<T>(arr: T[]) : T {
    return arr[Math.ceil(Math.random() * arr.length) - 1]
  }



}
