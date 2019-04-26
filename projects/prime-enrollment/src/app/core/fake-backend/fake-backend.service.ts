import { Injectable } from '@angular/core';
import { DocumentType } from '@prime-core/models/documents.interface';
import {
  ScreenAreaID,
  StatusMsgInterface
} from '@prime-core/models/api-base.model';
import { SysParamInterface } from '@prime-core/models/cache-api.model';

/**
 * Fake-backend service used to develop front-end without requiring back-end for
 * REST calls.
 *
 * Development/Test case data is setup in this file
 */
@Injectable({
  providedIn: 'root'
})
export class FakeBackendService {
  constructor() {}

  public countryList = [
    { countryCode: 'AFG', description: 'Afghanistan' },
    { countryCode: 'ALA', description: 'Åland Islands' },
    { countryCode: 'ALB', description: 'Albania' },
    { countryCode: 'DZA', description: 'Algeria' },
    { countryCode: 'ASM', description: 'American Samoa' },
    { countryCode: 'AND', description: 'Andorra' },
    { countryCode: 'AGO', description: 'Angola' },
    { countryCode: 'AIA', description: 'Anguilla' },
    { countryCode: 'ATA', description: 'Antarctica' },
    { countryCode: 'ATG', description: 'Antigua and Barbuda' },
    { countryCode: 'ARG', description: 'Argentina' },
    { countryCode: 'ARM', description: 'Armenia' },
    { countryCode: 'ABW', description: 'Aruba' },
    { countryCode: 'AUS', description: 'Australia' },
    { countryCode: 'AUT', description: 'Austria' },
    { countryCode: 'AZE', description: 'Azerbaijan' },
    { countryCode: 'BHS', description: 'Bahamas' },
    { countryCode: 'BHR', description: 'Bahrain' },
    { countryCode: 'BGD', description: 'Bangladesh' },
    { countryCode: 'BRB', description: 'Barbados' },
    { countryCode: 'BLR', description: 'Belarus' },
    { countryCode: 'BEL', description: 'Belgium' },
    { countryCode: 'BLZ', description: 'Belize' },
    { countryCode: 'BEN', description: 'Benin' },
    { countryCode: 'BMU', description: 'Bermuda' },
    { countryCode: 'BTN', description: 'Bhutan' },
    { countryCode: 'BOL', description: 'Bolivia, Plurinational State of' },
    { countryCode: 'BES', description: 'Bonaire, Sint Eustatius and Saba' },
    { countryCode: 'BIH', description: 'Bosnia and Herzegovina' },
    { countryCode: 'BWA', description: 'Botswana' },
    { countryCode: 'BVT', description: 'Bouvet Island' },
    { countryCode: 'BRA', description: 'Brazil' },
    { countryCode: 'IOT', description: 'British Indian Ocean Territory' },
    { countryCode: 'BRN', description: 'Brunei Darussalam' },
    { countryCode: 'BGR', description: 'Bulgaria' },
    { countryCode: 'BFA', description: 'Burkina Faso' },
    { countryCode: 'BDI', description: 'Burundi' },
    { countryCode: 'KHM', description: 'Cambodia' },
    { countryCode: 'CMR', description: 'Cameroon' },
    { countryCode: 'CAN', description: 'Canada' },
    { countryCode: 'CPV', description: 'Cape Verde' },
    { countryCode: 'CYM', description: 'Cayman Islands' },
    { countryCode: 'CAF', description: 'Central African Republic' },
    { countryCode: 'TCD', description: 'Chad' },
    { countryCode: 'CHL', description: 'Chile' },
    { countryCode: 'CHN', description: 'China' },
    { countryCode: 'CXR', description: 'Christmas Island' },
    { countryCode: 'CCK', description: 'Cocos (Keeling) Islands' },
    { countryCode: 'COL', description: 'Colombia' },
    { countryCode: 'COM', description: 'Comoros' },
    { countryCode: 'COG', description: 'Congo' },
    {
      countryCode: 'COD',
      description: 'Congo, the Democratic Republic of the'
    },
    { countryCode: 'COK', description: 'Cook Islands' },
    { countryCode: 'CRI', description: 'Costa Rica' },
    { countryCode: 'CIV', description: "Côte d'Ivoire" },
    { countryCode: 'HRV', description: 'Croatia' },
    { countryCode: 'CUB', description: 'Cuba' },
    { countryCode: 'CUW', description: 'Curaçao' },
    { countryCode: 'CYP', description: 'Cyprus' },
    { countryCode: 'CZE', description: 'Czech Republic' },
    { countryCode: 'DNK', description: 'Denmark' },
    { countryCode: 'DJI', description: 'Djibouti' },
    { countryCode: 'DMA', description: 'Dominica' },
    { countryCode: 'DOM', description: 'Dominican Republic' },
    { countryCode: 'ECU', description: 'Ecuador' },
    { countryCode: 'EGY', description: 'Egypt' },
    { countryCode: 'SLV', description: 'El Salvador' },
    { countryCode: 'GNQ', description: 'Equatorial Guinea' },
    { countryCode: 'ERI', description: 'Eritrea' },
    { countryCode: 'EST', description: 'Estonia' },
    { countryCode: 'ETH', description: 'Ethiopia' },
    { countryCode: 'FLK', description: 'Falkland Islands (Malvinas)' },
    { countryCode: 'FRO', description: 'Faroe Islands' },
    { countryCode: 'FJI', description: 'Fiji' },
    { countryCode: 'FIN', description: 'Finland' },
    { countryCode: 'FRA', description: 'France' },
    { countryCode: 'GUF', description: 'French Guiana' },
    { countryCode: 'PYF', description: 'French Polynesia' },
    { countryCode: 'ATF', description: 'French Southern Territories' },
    { countryCode: 'GAB', description: 'Gabon' },
    { countryCode: 'GMB', description: 'Gambia' },
    { countryCode: 'GEO', description: 'Georgia' },
    { countryCode: 'DEU', description: 'Germany' },
    { countryCode: 'GHA', description: 'Ghana' },
    { countryCode: 'GIB', description: 'Gibraltar' },
    { countryCode: 'GRC', description: 'Greece' },
    { countryCode: 'GRL', description: 'Greenland' },
    { countryCode: 'GRD', description: 'Grenada' },
    { countryCode: 'GLP', description: 'Guadeloupe' },
    { countryCode: 'GUM', description: 'Guam' },
    { countryCode: 'GTM', description: 'Guatemala' },
    { countryCode: 'GGY', description: 'Guernsey' },
    { countryCode: 'GIN', description: 'Guinea' },
    { countryCode: 'GNB', description: 'Guinea-Bissau' },
    { countryCode: 'GUY', description: 'Guyana' },
    { countryCode: 'HTI', description: 'Haiti' },
    { countryCode: 'HMD', description: 'Heard Island and McDonald Islands' },
    { countryCode: 'VAT', description: 'Holy See (Vatican City State)' },
    { countryCode: 'HND', description: 'Honduras' },
    { countryCode: 'HKG', description: 'Hong Kong' },
    { countryCode: 'HUN', description: 'Hungary' },
    { countryCode: 'ISL', description: 'Iceland' },
    { countryCode: 'IND', description: 'India' },
    { countryCode: 'IDN', description: 'Indonesia' },
    { countryCode: 'IRN', description: 'Iran, Islamic Republic of' },
    { countryCode: 'IRQ', description: 'Iraq' },
    { countryCode: 'IRL', description: 'Ireland' },
    { countryCode: 'IMN', description: 'Isle of Man' },
    { countryCode: 'ISR', description: 'Israel' },
    { countryCode: 'ITA', description: 'Italy' },
    { countryCode: 'JAM', description: 'Jamaica' },
    { countryCode: 'JPN', description: 'Japan' },
    { countryCode: 'JEY', description: 'Jersey' },
    { countryCode: 'JOR', description: 'Jordan' },
    { countryCode: 'KAZ', description: 'Kazakhstan' },
    { countryCode: 'KEN', description: 'Kenya' },
    { countryCode: 'KIR', description: 'Kiribati' },
    {
      countryCode: 'PRK',
      description: "Korea, Democratic People's Republic of"
    },
    { countryCode: 'KOR', description: 'Korea, Republic of' },
    { countryCode: 'KWT', description: 'Kuwait' },
    { countryCode: 'KGZ', description: 'Kyrgyzstan' },
    { countryCode: 'LAO', description: "Lao People's Democratic Republic" },
    { countryCode: 'LVA', description: 'Latvia' },
    { countryCode: 'LBN', description: 'Lebanon' },
    { countryCode: 'LSO', description: 'Lesotho' },
    { countryCode: 'LBR', description: 'Liberia' },
    { countryCode: 'LBY', description: 'Libya' },
    { countryCode: 'LIE', description: 'Liechtenstein' },
    { countryCode: 'LTU', description: 'Lithuania' },
    { countryCode: 'LUX', description: 'Luxembourg' },
    { countryCode: 'MAC', description: 'Macao' },
    {
      countryCode: 'MKD',
      description: 'Macedonia, the former Yugoslav Republic of'
    },
    { countryCode: 'MDG', description: 'Madagascar' },
    { countryCode: 'MWI', description: 'Malawi' },
    { countryCode: 'MYS', description: 'Malaysia' },
    { countryCode: 'MDV', description: 'Maldives' },
    { countryCode: 'MLI', description: 'Mali' },
    { countryCode: 'MLT', description: 'Malta' },
    { countryCode: 'MHL', description: 'Marshall Islands' },
    { countryCode: 'MTQ', description: 'Martinique' },
    { countryCode: 'MRT', description: 'Mauritania' },
    { countryCode: 'MUS', description: 'Mauritius' },
    { countryCode: 'MYT', description: 'Mayotte' },
    { countryCode: 'MEX', description: 'Mexico' },
    { countryCode: 'FSM', description: 'Micronesia, Federated States of' },
    { countryCode: 'MDA', description: 'Moldova, Republic of' },
    { countryCode: 'MCO', description: 'Monaco' },
    { countryCode: 'MNG', description: 'Mongolia' },
    { countryCode: 'MNE', description: 'Montenegro' },
    { countryCode: 'MSR', description: 'Montserrat' },
    { countryCode: 'MAR', description: 'Morocco' },
    { countryCode: 'MOZ', description: 'Mozambique' },
    { countryCode: 'MMR', description: 'Myanmar' },
    { countryCode: 'NAM', description: 'Namibia' },
    { countryCode: 'NRU', description: 'Nauru' },
    { countryCode: 'NPL', description: 'Nepal' },
    { countryCode: 'NLD', description: 'Netherlands' },
    { countryCode: 'NCL', description: 'New Caledonia' },
    { countryCode: 'NZL', description: 'New Zealand' },
    { countryCode: 'NIC', description: 'Nicaragua' },
    { countryCode: 'NER', description: 'Niger' },
    { countryCode: 'NGA', description: 'Nigeria' },
    { countryCode: 'NIU', description: 'Niue' },
    { countryCode: 'NFK', description: 'Norfolk Island' },
    { countryCode: 'MNP', description: 'Northern Mariana Islands' },
    { countryCode: 'NOR', description: 'Norway' },
    { countryCode: 'OMN', description: 'Oman' },
    { countryCode: 'PAK', description: 'Pakistan' },
    { countryCode: 'PLW', description: 'Palau' },
    { countryCode: 'PSE', description: 'Palestinian Territory, Occupied' },
    { countryCode: 'PAN', description: 'Panama' },
    { countryCode: 'PNG', description: 'Papua New Guinea' },
    { countryCode: 'PRY', description: 'Paraguay' },
    { countryCode: 'PER', description: 'Peru' },
    { countryCode: 'PHL', description: 'Philippines' },
    { countryCode: 'PCN', description: 'Pitcairn' },
    { countryCode: 'POL', description: 'Poland' },
    { countryCode: 'PRT', description: 'Portugal' },
    { countryCode: 'PRI', description: 'Puerto Rico' },
    { countryCode: 'QAT', description: 'Qatar' },
    { countryCode: 'REU', description: 'Réunion' },
    { countryCode: 'ROU', description: 'Romania' },
    { countryCode: 'RUS', description: 'Russian Federation' },
    { countryCode: 'RWA', description: 'Rwanda' },
    { countryCode: 'BLM', description: 'Saint Barthélemy' },
    {
      countryCode: 'SHN',
      description: 'Saint Helena, Ascension and Tristan da Cunha'
    },
    { countryCode: 'KNA', description: 'Saint Kitts and Nevis' },
    { countryCode: 'LCA', description: 'Saint Lucia' },
    { countryCode: 'MAF', description: 'Saint Martin (French part)' },
    { countryCode: 'SPM', description: 'Saint Pierre and Miquelon' },
    { countryCode: 'VCT', description: 'Saint Vincent and the Grenadines' },
    { countryCode: 'WSM', description: 'Samoa' },
    { countryCode: 'SMR', description: 'San Marino' },
    { countryCode: 'STP', description: 'Sao Tome and Principe' },
    { countryCode: 'SAU', description: 'Saudi Arabia' },
    { countryCode: 'SEN', description: 'Senegal' },
    { countryCode: 'SRB', description: 'Serbia' },
    { countryCode: 'SYC', description: 'Seychelles' },
    { countryCode: 'SLE', description: 'Sierra Leone' },
    { countryCode: 'SGP', description: 'Singapore' },
    { countryCode: 'SXM', description: 'Sint Maarten (Dutch part)' },
    { countryCode: 'SVK', description: 'Slovakia' },
    { countryCode: 'SVN', description: 'Slovenia' },
    { countryCode: 'SLB', description: 'Solomon Islands' },
    { countryCode: 'SOM', description: 'Somalia' },
    { countryCode: 'ZAF', description: 'South Africa' },
    {
      countryCode: 'SGS',
      description: 'South Georgia and the South Sandwich Islands'
    },
    { countryCode: 'SSD', description: 'South Sudan' },
    { countryCode: 'ESP', description: 'Spain' },
    { countryCode: 'LKA', description: 'Sri Lanka' },
    { countryCode: 'SDN', description: 'Sudan' },
    { countryCode: 'SUR', description: 'Suriname' },
    { countryCode: 'SJM', description: 'Svalbard and Jan Mayen' },
    { countryCode: 'SWZ', description: 'Swaziland' },
    { countryCode: 'SWE', description: 'Sweden' },
    { countryCode: 'CHE', description: 'Switzerland' },
    { countryCode: 'SYR', description: 'Syrian Arab Republic' },
    { countryCode: 'TWN', description: 'Taiwan, Province of China' },
    { countryCode: 'TJK', description: 'Tajikistan' },
    { countryCode: 'TZA', description: 'Tanzania, United Republic of' },
    { countryCode: 'THA', description: 'Thailand' },
    { countryCode: 'TLS', description: 'Timor-Leste' },
    { countryCode: 'TGO', description: 'Togo' },
    { countryCode: 'TKL', description: 'Tokelau' },
    { countryCode: 'TON', description: 'Tonga' },
    { countryCode: 'TTO', description: 'Trinidad and Tobago' },
    { countryCode: 'TUN', description: 'Tunisia' },
    { countryCode: 'TUR', description: 'Turkey' },
    { countryCode: 'TKM', description: 'Turkmenistan' },
    { countryCode: 'TCA', description: 'Turks and Caicos Islands' },
    { countryCode: 'TUV', description: 'Tuvalu' },
    { countryCode: 'UGA', description: 'Uganda' },
    { countryCode: 'UKR', description: 'Ukraine' },
    { countryCode: 'ARE', description: 'United Arab Emirates' },
    { countryCode: 'GBR', description: 'United Kingdom' },
    { countryCode: 'USA', description: 'United States' },
    { countryCode: 'UMI', description: 'United States Minor Outlying Islands' },
    { countryCode: 'URY', description: 'Uruguay' },
    { countryCode: 'UZB', description: 'Uzbekistan' },
    { countryCode: 'VUT', description: 'Vanuatu' },
    { countryCode: 'VEN', description: 'Venezuela, Bolivarian Republic of' },
    { countryCode: 'VNM', description: 'Viet Nam' },
    { countryCode: 'VGB', description: 'Virgin Islands, British' },
    { countryCode: 'VIR', description: 'Virgin Islands, U.S.' },
    { countryCode: 'WLF', description: 'Wallis and Futuna' },
    { countryCode: 'ESH', description: 'Western Sahara' },
    { countryCode: 'YEM', description: 'Yemen' },
    { countryCode: 'ZMB', description: 'Zambia' },
    { countryCode: 'ZWE', description: 'Zimbabwe' }
  ];

  public provinceList = [
    { country: 'CAN', provinceCode: 'AB', description: 'Alberta' },
    { country: 'CAN', provinceCode: 'BC', description: 'British Columbia' },
    { country: 'CAN', provinceCode: 'MB', description: 'Manitoba' },
    { country: 'CAN', provinceCode: 'NB', description: 'New Brunswick' },
    {
      country: 'CAN',
      provinceCode: 'NL',
      description: 'Newfoundland and Labrador'
    },
    { country: 'CAN', provinceCode: 'NS', description: 'Nova Scotia' },
    { country: 'CAN', provinceCode: 'ON', description: 'Ontario' },
    { country: 'CAN', provinceCode: 'PE', description: 'Prince Edward Island' },
    { country: 'CAN', provinceCode: 'QC', description: 'Quebec' },
    { country: 'CAN', provinceCode: 'SK', description: 'Saskatchewan' },
    {
      country: 'CAN',
      provinceCode: 'NT',
      description: 'Northwest Territories'
    },
    { country: 'CAN', provinceCode: 'NU', description: 'Nunavut' },
    { country: 'CAN', provinceCode: 'YT', description: 'Yukon' },
    { country: 'USA', provinceCode: 'AL', description: 'Alabama' },
    { country: 'USA', provinceCode: 'AK', description: 'Alaska' },
    { country: 'USA', provinceCode: 'AZ', description: 'Arizona' },
    { country: 'USA', provinceCode: 'AR', description: 'Arkansas' },
    { country: 'USA', provinceCode: 'CA', description: 'California' },
    { country: 'USA', provinceCode: 'CO', description: 'Colorado' },
    { country: 'USA', provinceCode: 'CT', description: 'Connecticut' },
    { country: 'USA', provinceCode: 'DE', description: 'Delaware' },
    { country: 'USA', provinceCode: 'DC', description: 'District Of Columbia' },
    { country: 'USA', provinceCode: 'FL', description: 'Florida' },
    { country: 'USA', provinceCode: 'GA', description: 'Georgia' },
    { country: 'USA', provinceCode: 'HI', description: 'Hawaii' },
    { country: 'USA', provinceCode: 'ID', description: 'Idaho' },
    { country: 'USA', provinceCode: 'IL', description: 'Illinois' },
    { country: 'USA', provinceCode: 'IN', description: 'Indiana' },
    { country: 'USA', provinceCode: 'IA', description: 'Iowa' },
    { country: 'USA', provinceCode: 'KS', description: 'Kansas' },
    { country: 'USA', provinceCode: 'KY', description: 'Kentucky' },
    { country: 'USA', provinceCode: 'LA', description: 'Louisiana' },
    { country: 'USA', provinceCode: 'ME', description: 'Maine' },
    { country: 'USA', provinceCode: 'MD', description: 'Maryland' },
    { country: 'USA', provinceCode: 'MA', description: 'Massachusetts' },
    { country: 'USA', provinceCode: 'MI', description: 'Michigan' },
    { country: 'USA', provinceCode: 'MN', description: 'Minnesota' },
    { country: 'USA', provinceCode: 'MS', description: 'Mississippi' },
    { country: 'USA', provinceCode: 'MO', description: 'Missouri' },
    { country: 'USA', provinceCode: 'MT', description: 'Montana' },
    { country: 'USA', provinceCode: 'NE', description: 'Nebraska' },
    { country: 'USA', provinceCode: 'NV', description: 'Nevada' },
    { country: 'USA', provinceCode: 'NH', description: 'New Hampshire' },
    { country: 'USA', provinceCode: 'NJ', description: 'New Jersey' },
    { country: 'USA', provinceCode: 'NM', description: 'New Mexico' },
    { country: 'USA', provinceCode: 'NY', description: 'New York' },
    { country: 'USA', provinceCode: 'NC', description: 'North Carolina' },
    { country: 'USA', provinceCode: 'ND', description: 'North Dakota' },
    { country: 'USA', provinceCode: 'OH', description: 'Ohio' },
    { country: 'USA', provinceCode: 'OK', description: 'Oklahoma' },
    { country: 'USA', provinceCode: 'OR', description: 'Oregon' },
    { country: 'USA', provinceCode: 'PA', description: 'Pennsylvania' },
    { country: 'USA', provinceCode: 'RI', description: 'Rhode Island' },
    { country: 'USA', provinceCode: 'SC', description: 'South Carolina' },
    { country: 'USA', provinceCode: 'SD', description: 'South Dakota' },
    { country: 'USA', provinceCode: 'TN', description: 'Tennessee' },
    { country: 'USA', provinceCode: 'TX', description: 'Texas' },
    { country: 'USA', provinceCode: 'UT', description: 'Utah' },
    { country: 'USA', provinceCode: 'VT', description: 'Vermont' },
    { country: 'USA', provinceCode: 'VA', description: 'Virginia' },
    { country: 'USA', provinceCode: 'WA', description: 'Washington' },
    { country: 'USA', provinceCode: 'WV', description: 'West Virginia' },
    { country: 'USA', provinceCode: 'WI', description: 'Wisconsin' },
    { country: 'USA', provinceCode: 'WY', description: 'Wyoming' }
  ];

  public messageList: StatusMsgInterface[] = [
    {
      msgID: '1',
      msgText: 'Account successfully created.  (0001)',
      msgType: '0',
      scrArea: ScreenAreaID.CONFIRMATION,
      appLayer: 'ALL'
    },
    {
      msgID: '10',
      msgText:
        'Invalid password, please enter a correct password or contact an Administrator. (0010)',
      msgType: '1',
      scrArea: ScreenAreaID.CONFIRMATION,
      appLayer: 'ALL'
    },
    {
      msgID: '101',
      msgText: 'Registration has been successfully completed. (0101)',
      msgType: '0',
      scrArea: ScreenAreaID.CONFIRMATION,
      appLayer: 'ALL'
    },
    {
      msgID: '104',
      msgText:
        'A potential duplicate Identity has been detected and you will need to complete ID Proofing to resolve (0104)',
      msgType: '2',
      scrArea: ScreenAreaID.CONFIRMATION,
      appLayer: 'ALL'
    },
    {
      msgID: '105',
      msgText:
        'You can update your Registration information but cannot enroll in PRIME until you have ID-Proofed to resolve duplicate(s) (0105)',
      msgType: '2',
      scrArea: ScreenAreaID.CONFIRMATION,
      appLayer: 'ALL'
    },
    {
      msgID: '106',
      msgText:
        'Authentication failed, please retry or contact an administrator (0106)',
      msgType: '1',
      scrArea: ScreenAreaID.CONFIRMATION,
      appLayer: 'ALL'
    },
    {
      msgID: '11',
      msgText:
        'Mailing Address must be within Canada when Hard Token is selected. Choose another Multi-factor login method or update your mailing address to a Canadian mailing address. (0011)',
      msgType: '1',
      scrArea: ScreenAreaID.CONFIRMATION,
      appLayer: 'ALL'
    },
    {
      msgID: '111',
      msgText: 'MoH credential has been successfully created (0111)',
      msgType: '0',
      scrArea: ScreenAreaID.CONFIRMATION,
      appLayer: 'ALL'
    },
    {
      msgID: '113',
      msgText:
        'Please contact an ICBC/Service BC agent to update the identity information (0113)',
      msgType: '2',
      scrArea: ScreenAreaID.CONFIRMATION,
      appLayer: 'ALL'
    },
    {
      msgID: '114',
      msgText:
        'MoH credential has been successfully added. A duplicate Identity has been detected that will need to be resolved during ID Proofing (0114)',
      msgType: '2',
      scrArea: ScreenAreaID.CONFIRMATION,
      appLayer: 'ALL'
    },
    {
      msgID: '121',
      msgText: 'Registration information has been successfully updated. (0121)',
      msgType: '0',
      scrArea: ScreenAreaID.CONFIRMATION,
      appLayer: 'ALL'
    },
    {
      msgID: '122',
      msgText:
        'Please ID Proof to complete the Registration Identity information updates (0122)',
      msgType: '2',
      scrArea: ScreenAreaID.CONFIRMATION,
      appLayer: 'ALL'
    },
    {
      msgID: '124',
      msgText:
        'Duplicate Contact info found. Please change the Email address or contact an Administrator. (0124)',
      msgType: '1',
      scrArea: ScreenAreaID.CONFIRMATION,
      appLayer: 'ALL'
    },
    {
      msgID: '125',
      msgText:
        'Duplicate Contact info found. Please change the recovery SMS phone number or contact an Administrator. (0125)',
      msgType: '1',
      scrArea: ScreenAreaID.CONFIRMATION,
      appLayer: 'ALL'
    },
    {
      msgID: '126',
      msgText:
        'Registration information has been successfully updated and you will be sent a hard token to the mailing address provided  (0126)',
      msgType: '0',
      scrArea: ScreenAreaID.CONFIRMATION,
      appLayer: 'ALL'
    },
    {
      msgID: '127',
      msgText:
        'You have removed all the Multi Factor Authentication options. Please add a Multi Factor Authentication option and complete ID Proofing to continue access (0127)',
      msgType: '2',
      scrArea: ScreenAreaID.CONFIRMATION,
      appLayer: 'ALL'
    },
    {
      msgID: '128',
      msgText:
        'Registration information has been successfully updated, please complete ID Proofing. (0128)',
      msgType: '0',
      scrArea: ScreenAreaID.CONFIRMATION,
      appLayer: 'ALL'
    },
    {
      msgID: '129',
      msgText:
        'Please ID Proof to complete Multi Factor authentication setup (0129)',
      msgType: '2',
      scrArea: ScreenAreaID.CONFIRMATION,
      appLayer: 'ALL'
    },
    {
      msgID: '130',
      msgText:
        'This information can only be updated after logging in with Multi Factor authentication (0130)',
      msgType: '2',
      scrArea: ScreenAreaID.CONFIRMATION,
      appLayer: 'ALL'
    },
    {
      msgID: '131',
      msgText:
        'You have removed all the Multi Factor Authentication options, please add a Multi Factor Authentication option to continue access.\nIf you do not add a multi factor authentication option now, then you will be required to add a Multi Factor authentication option and complete ID Proofing (0131)',
      msgType: '2',
      scrArea: ScreenAreaID.CONFIRMATION,
      appLayer: 'ALL'
    },
    {
      msgID: '151',
      msgText: 'A password reset link has been sent to you. (0151)',
      msgType: '0',
      scrArea: ScreenAreaID.CONFIRMATION,
      appLayer: 'ALL'
    },
    {
      msgID: '152',
      msgText: 'Your password has been successfully reset (0152)',
      msgType: '0',
      scrArea: ScreenAreaID.CONFIRMATION,
      appLayer: 'ALL'
    },
    {
      msgID: '153',
      msgText:
        'Information provided does not match the Registration information. Please try again or contact an administrator (0153)',
      msgType: '1',
      scrArea: ScreenAreaID.CONFIRMATION,
      appLayer: 'ALL'
    },
    {
      msgID: '154',
      msgText:
        'You have exceeded the number of retries to answer the security questions provided. Please contact an Administrator. (0154)',
      msgType: '1',
      scrArea: ScreenAreaID.CONFIRMATION,
      appLayer: 'ALL'
    },
    {
      msgID: '161',
      msgText:
        'The UserID has been sent to the email address or SMS phone number provided (0161)',
      msgType: '0',
      scrArea: ScreenAreaID.CONFIRMATION,
      appLayer: 'ALL'
    },
    {
      msgID: '162',
      msgText:
        'The CAPTCHA response provided does not match. Please try again. (0162)',
      msgType: '1',
      scrArea: ScreenAreaID.CONFIRMATION,
      appLayer: 'ALL'
    },
    {
      msgID: '181',
      msgText:
        "Registered User's Identity has been successfully Deactivated (0181)",
      msgType: '0',
      scrArea: ScreenAreaID.CONFIRMATION,
      appLayer: 'ALL'
    },
    {
      msgID: '182',
      msgText:
        'Please enter a Deactivation Reason to complete processing (0182)',
      msgType: '1',
      scrArea: ScreenAreaID.CONFIRMATION,
      appLayer: 'ALL'
    },
    {
      msgID: '183',
      msgText: 'Unable to find Registered User. Please try again (0183)',
      msgType: '2',
      scrArea: ScreenAreaID.CONFIRMATION,
      appLayer: 'ALL'
    },
    {
      msgID: '2',
      msgText: 'Please log on to complete to ID Proofing. (0002)',
      msgType: '0',
      scrArea: ScreenAreaID.CONFIRMATION,
      appLayer: 'ALL'
    },
    {
      msgID: '20',
      msgText: 'Login complete (0020)',
      msgType: '0',
      scrArea: ScreenAreaID.CONFIRMATION,
      appLayer: 'ALL'
    },
    {
      msgID: '200',
      msgText:
        'Registered User Identity has been successfully Reactivated (0200)',
      msgType: '0',
      scrArea: ScreenAreaID.CONFIRMATION,
      appLayer: 'ALL'
    },
    {
      msgID: '201',
      msgText:
        'Please enter a Reactivation Reason to complete processing (0201)',
      msgType: '1',
      scrArea: ScreenAreaID.CONFIRMATION,
      appLayer: 'ALL'
    },
    {
      msgID: '202',
      msgText: 'Unable to find Registered User. Please try again (0202)',
      msgType: '2',
      scrArea: ScreenAreaID.CONFIRMATION,
      appLayer: 'ALL'
    },
    {
      msgID: '21',
      msgText: 'Invalid entry. Please retry or contact administrator  (0021)',
      msgType: '1',
      scrArea: ScreenAreaID.CONFIRMATION,
      appLayer: 'ALL'
    },
    {
      msgID: '22',
      msgText:
        'Multi-factor code could not be verified. Please retry or request a new code. (0022)',
      msgType: '1',
      scrArea: ScreenAreaID.CONFIRMATION,
      appLayer: 'ALL'
    },
    {
      msgID: '221',
      msgText: 'BCSC credential has been successfully created (0221)',
      msgType: '0',
      scrArea: ScreenAreaID.CONFIRMATION,
      appLayer: 'ALL'
    },
    {
      msgID: '222',
      msgText: 'Hard token has been mailed (0222)',
      msgType: '0',
      scrArea: ScreenAreaID.CONFIRMATION,
      appLayer: 'ALL'
    },
    {
      msgID: '23',
      msgText:
        'You have exceeded the maximum login attempts, please wait 15 minutes before trying again. (0023)',
      msgType: '1',
      scrArea: ScreenAreaID.CONFIRMATION,
      appLayer: 'ALL'
    },
    {
      msgID: '24',
      msgText:
        'You have exceeded the maximum login attempts, please contact your administrator to resolve. (0024)',
      msgType: '1',
      scrArea: ScreenAreaID.CONFIRMATION,
      appLayer: 'ALL'
    },
    {
      msgID: '25',
      msgText: 'Your password is expired. Please create a new password. (0025)',
      msgType: '2',
      scrArea: ScreenAreaID.INTERIM,
      appLayer: 'ALL'
    },
    {
      msgID: '26',
      msgText: 'Password has been updated (0026)',
      msgType: '0',
      scrArea: ScreenAreaID.FINAL,
      appLayer: 'ALL'
    },
    {
      msgID: '3',
      msgText: 'Please scan QR Code for Mobile Authentication (0003)',
      msgType: '0',
      scrArea: ScreenAreaID.QRCODE,
      appLayer: 'ALL'
    },
    {
      msgID: '4',
      msgText:
        'Please log on to complete ID Proofing. Your Hard Token will be sent after you successfully complete ID Proofing. (0004)',
      msgType: '0',
      scrArea: ScreenAreaID.CONFIRMATION,
      appLayer: 'ALL'
    },
    {
      msgID: '5',
      msgText:
        'Account successfully created. A duplicate Identity has been detected that will need to be resolved during ID Proofing (0005)',
      msgType: '2',
      scrArea: ScreenAreaID.CONFIRMATION,
      appLayer: 'ALL'
    },
    {
      msgID: '9',
      msgText:
        'UserID provided is already in use, please enter a different UserID or contact an Administrator. (0009)',
      msgType: '1',
      scrArea: ScreenAreaID.CONFIRMATION,
      appLayer: 'ALL'
    },
    {
      msgID: '9998',
      msgText:
        'This error occurred due to a unanticipated non-system related issue. (9998)',
      msgType: '1',
      scrArea: ScreenAreaID.CONFIRMATION,
      appLayer: 'ALL'
    },
    {
      msgID: '9999',
      msgText:
        'This error occurred because the system encountered an unanticipated situation which  forced it to stop. (9999)',
      msgType: '1',
      scrArea: ScreenAreaID.CONFIRMATION,
      appLayer: 'ALL'
    }
  ];

  public secQuestionList: string[] = [
    "What was your first pet's name?",
    'What was the make of your first car?',
    'What was the last name of your favorite teacher?',
    'What was the last name of your childhood best friend?',
    "What is your oldest cousin's first name",
    'What town was your father born in?',
    'What town was your mother born in?',
    'Where did you meet your spouse?',
    'What is the name of your favorite book?'
  ];

  public docTypes: DocumentType[] = [
    {
      docType: "Driver's License",
      description:
        "Scan the document or take a photo of it.  Make sure that it's: <br/>-test test"
    },
    {
      docType: 'Passport',
      description: 'passport tips etc etc etc'
    }
  ];

  public sysParams: SysParamInterface[] = [
    { name: 'REG_SECQUES_CNT', value: '3' },
    { name: 'REG_CLIENT_NAME', value: 'regweb' }
  ];
}
