import { FaDiscord, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"

//syncedWallet
import coinbase from "../public/images/pictures/NFTWallet/coinbase.png"
import metaMask from "../public/images/pictures/NFTWallet/MetaMask.png"
import phantom from "../public/images/pictures/NFTWallet/phantom.png"
import walletConnect from "../public/images/pictures/NFTWallet/walletconnect.png"

//sidebar
import odeleLogo from "../public/images/icons/home.svg"
import createCampaign from "../public/images/icons/createCampaign.svg"
import campaign from "../public/images/icons/campaign.svg"
import syncedNft from "../public/images/icons/syncedNft.png"
import settings from "../public/images/icons/settings.svg"
import about from "../public/images/icons/about.svg"

//syncedNFT
import chimp from "../public/images/pictures/chimp.png"
import dog from "../public/images/pictures/dog.png"
import honeyFox from "../public/images/pictures/honeyFox.png"

//reportinghub
import conversion from "../public/images/icons/conversion.svg"
import sales from "../public/images/icons/sales.svg"
import clicks from "../public/images/icons/clicks.svg"
import cpc from "../public/images/icons/cpc.svg"

//nftDetailsData
import ethereum from "../public/images/pictures/ethereum-logo.png"

export const nftWallet = [
    {
        image:metaMask,
        name:'MetaMask'
    },
    {
        image:coinbase,
        name:'Coinbase Wallet'
    },
    {
        image:walletConnect,
        name:'WalletConnect'
    },
    {
        image:phantom,
        name:'Phantom'
    }
]

export const socialIcons = [ 
    {
    icon:<FaFacebookF/>,
    link:'#'
   },
   {
    icon:<FaTwitter/>,
    link:'#'
   },
   {
    icon:<FaInstagram/>,
    link:'#'
   },
   {
    icon:<FaLinkedinIn/>,
    link:'#'
   },
   {
    icon:<FaDiscord/>,
    link:'#'
   }
]

export const sideBarMenu = [
    {
      image: odeleLogo,
      link : '/homeflow',
      title: 'Home'
    },
    {
        image: createCampaign,
        link : '/createcampaign',
        title: 'Campaign'
      },
      {
        image: campaign,
        link : '/campaign',
        title: 'Wallet'
      },
      {
        image: syncedNft,
        link : '/syncedNFT',
        title: 'Profile'
      },
      {
        image: settings,
        link : '/settings',
        title: 'Setttings'
      },
      {
        image: about,
        //  link : '/#',
        title: 'About'
      }

]
 export const createCampaignMenu = [
  {
    link : '/createCampaign',
    title: ''
  },
  {
    link : '/review',
    title: 'Review'
  },
  {
    link : '/launchCampaign',
    title: 'Launch Campaign'
  },
]

export const syncedNFT = [
  
{ 
  name:'No Ads Profile',
  no:8,
  content:[
      {
        id:1,
       image:honeyFox,
       title:'Honeyfox',
       name:'molax honey fox tale',
       rate: 0.90,
       type:'single'
      },
      {
        id:2,
        image:dog,
        title:'Chimp #02',
        name:'Tech mirantow chimp head',
        rate: 0.08,
        type:'collection'
       },
       {
        id:3,
        image:chimp,
        title:'Chimp #02',
        name:'Tech mirantow chimp head',
        rate: 0.90,
        type:'single'
       },
       {
        id:4,
       image:honeyFox,
       title:'Honeyfox',
       name:'molax honey fox tale',
       rate: 0.90,
       type:'collection'
      },
      {
        id:5,
        image:dog,
        title:'Chimp #02',
        name:'Tech mirantow chimp head',
        rate: 0.08,
        type:'single'
       },
       {
        id:6,
        image:chimp,
        title:'Chimp #02',
        name:'Tech mirantow chimp head',
        rate: 0.90,
        type:'collection'
       },
       {
        id:7,
       image:honeyFox,
       title:'Honeyfox',
       name:'molax honey fox tale',
       rate: 0.90,
       type:'single'
      },
      {
        id:8,
        image:dog,
        title:'Chimp #02',
        name:'Tech mirantow chimp head',
        rate: 0.08,
        type:'collection'
       },
    ]},
  

{
  name:'With Ads Profile',
  no:4,
  content: [ {
  id:1,
 image:honeyFox,
 title:'Honeyfox',
 name:'molax honey fox tale',
 rate: 0.90,
 type:'collection'
},
{
  id:2,
  image:dog,
  title:'Chimp #02',
  name:'Tech mirantow chimp head',
  rate: 0.08,
  type:'single'
 },
 {
  id:3,
  image:chimp,
  title:'Chimp #02',
  name:'Tech mirantow chimp head',
  rate: 0.90,
  type:'collection',
 },
 {
  id:4,
 image:honeyFox,
 title:'Honeyfox',
 name:'molax honey fox tale',
 rate: 0.90,
 type:'single'
},
{
  id:5,
  image:dog,
  title:'Chimp #02',
  name:'Tech mirantow chimp head',
  rate: 0.08,
  type:'collection',
 },
]}

]

export const reportingHubData = [
  {
    title:'Clicks',
    total:204,
    image:clicks
  },
  {
    title:'Sales',
    total:15,
    image:sales
  },
  {
    title:'Conversions',
    total:38,
    image:conversion
  },
  {
    title:'CPC',
    amount:30,
    image:cpc,
    currency:'$'
  },
  {
    title:'Remaining budget',
    amount:340,
    budget:510,
    currency:'$'
  },
  {
    title:'Total budget',
    amount:850,
    currency:'$'
  }
]

export const campaignData =[
      {
        'campaign name':'Chimp promotion lab',
        'clicks':104,
        'sales':8,
        'conversion':32,
        'currency':'$',
        'cpc':25.34,
        'budget':220.00,
        'remaining budget':89.00,
        'performance':'Average'
      },
      {
        'campaign name':'Red headfox ads',
        'clicks':35,
        'sales':3,
        'conversion':19,
        'currency':'$',
        'cpc':31.34,
        'budget':220.00,
        'remaining budget':89.00,
        'performance':'Good'
      },
      {
        'campaign name':'Universal NFT props',
        'clicks':45,
        'sales':1,
        'conversion':32,
        'currency':'$',
        'cpc':25.34,
        'budget':220.00,
        'remaining budget':89.00,
        'performance':'Poor'
      },
      {
        'campaign name':'Grand theft NFT Pro',
        'clicks':20,
        'sales':2,
        'conversion':32,
        'currency':'$',
        'cpc':25.34,
        'budget':220.00,
        'remaining budget':89.00,
        'performance':'Good'
      },
      {
        'campaign name':'Cheap promotion plus',
        'clicks':10,
        'sales':0,
        'conversion':20,
        'currency':'$',
        'cpc':55.34,
        'budget':220.00,
        'remaining budget':89.00,
        'performance':'Average'
      },
      {
        'campaign name':'NFT event ads',
        'clicks':8,
        'sales':0,
        'conversion':32,
        'currency':'$',
        'cpc':25.34,
        'budget':220.00,
        'remaining budget':89.00,
        'performance':'Poor'
      },
      {
        'campaign name':'Pocket promotion',
        'clicks':104,
        'sales':8,
        'conversion':25,
        'currency':'$',
        'cpc':33.34,
        'budget':220.00,
        'remaining budget':89.00,
        'performance':'Average'
      }

]


export const topPlacementData =[
  {
    'platform':'Discord',
    'viewers':832,
    'videos':700,
    'phone':132,
    'url':'discord.com/chimp-02/...',
  },
  {
    'platform':'Twitter',
    'viewers':578,
    'videos':278,
    'phone':300,
    'url':'discord.com/chimp-02/...',
  },
  {
    'platform':'Facebook (Meta)',
    'viewers':402,
    'videos':200,
    'phone':202,
    'url':'discord.com/chimp-02/...',
  },
  {
    'platform':'Youtube',
    'viewers':300,
    'videos':210,
    'phone':190,
    'url':'discord.com/chimp-02/...',
  },
]

export const topLocationData =[
  {
    'location':'United States',
    'viewers':120,
    'traffic':48,
  },
  {
    'location':'Japan',
    'viewers':120,
    'traffic':35,
  },
  {
    'location':'Russia',
    'viewers':120,
    'traffic':24,
  },
  {
    'location':'China',
    'viewers':832,
    'traffic':700,
  },
]

export const nftDetailsData =[
  {
    title:'Creator',
    name:'Anonymous - User-79239',
  },
  {
    title:'Owner',
    name:'Bbay Chimp',
  },
  {
    title:'Contact Address',
    name:'0xe0949...29A9',
  },
  {
    title:'Token ID',
    name:'79239',
  },
  {
    title:'External Link',
    name:'',
    icon:ethereum
  }
]

export const colorData = [{
  "color": "Purple"
}, {
  "color": "Khaki"
}, {
  "color": "Crimson"
}, {
  "color": "Mauv"
}, {
  "color": "Green"
}, {
  "color": "Maroon"
}, {
  "color": "Aquamarine"
}, {
  "color": "Teal"
}, {
  "color": "Puce"
}, {
  "color": "Blue"
}, {
  "color": "Red"
}, {
  "color": "Orange"
}, {
  "color": "Yellow"
}, {
  "color": "Goldenrod"
}, {
  "color": "Violet"
}, {
  "color": "Turquoise"
}, {
  "color": "Black"
}, {
  "color": "Pink"
}, {
  "color": "White"
}, {
  "color": "Brown"
}]

export const countries = [ 
  {name: 'Afghanistan', code: 'AF'}, 
  {name: 'Åland Islands', code: 'AX'}, 
  {name: 'Albania', code: 'AL'}, 
  {name: 'Algeria', code: 'DZ'}, 
  {name: 'American Samoa', code: 'AS'}, 
  {name: 'AndorrA', code: 'AD'}, 
  {name: 'Angola', code: 'AO'}, 
  {name: 'Anguilla', code: 'AI'}, 
  {name: 'Antarctica', code: 'AQ'}, 
  {name: 'Antigua and Barbuda', code: 'AG'}, 
  {name: 'Argentina', code: 'AR'}, 
  {name: 'Armenia', code: 'AM'}, 
  {name: 'Aruba', code: 'AW'}, 
  {name: 'Australia', code: 'AU'}, 
  {name: 'Austria', code: 'AT'}, 
  {name: 'Azerbaijan', code: 'AZ'}, 
  {name: 'Bahamas', code: 'BS'}, 
  {name: 'Bahrain', code: 'BH'}, 
  {name: 'Bangladesh', code: 'BD'}, 
  {name: 'Barbados', code: 'BB'}, 
  {name: 'Belarus', code: 'BY'}, 
  {name: 'Belgium', code: 'BE'}, 
  {name: 'Belize', code: 'BZ'}, 
  {name: 'Benin', code: 'BJ'}, 
  {name: 'Bermuda', code: 'BM'}, 
  {name: 'Bhutan', code: 'BT'}, 
  {name: 'Bolivia', code: 'BO'}, 
  {name: 'Bosnia and Herzegovina', code: 'BA'}, 
  {name: 'Botswana', code: 'BW'}, 
  {name: 'Bouvet Island', code: 'BV'}, 
  {name: 'Brazil', code: 'BR'}, 
  {name: 'British Indian Ocean Territory', code: 'IO'}, 
  {name: 'Brunei Darussalam', code: 'BN'}, 
  {name: 'Bulgaria', code: 'BG'}, 
  {name: 'Burkina Faso', code: 'BF'}, 
  {name: 'Burundi', code: 'BI'}, 
  {name: 'Cambodia', code: 'KH'}, 
  {name: 'Cameroon', code: 'CM'}, 
  {name: 'Canada', code: 'CA'}, 
  {name: 'Cape Verde', code: 'CV'}, 
  {name: 'Cayman Islands', code: 'KY'}, 
  {name: 'Central African Republic', code: 'CF'}, 
  {name: 'Chad', code: 'TD'}, 
  {name: 'Chile', code: 'CL'}, 
  {name: 'China', code: 'CN'}, 
  {name: 'Christmas Island', code: 'CX'}, 
  {name: 'Cocos (Keeling) Islands', code: 'CC'}, 
  {name: 'Colombia', code: 'CO'}, 
  {name: 'Comoros', code: 'KM'}, 
  {name: 'Congo', code: 'CG'}, 
  {name: 'Congo, The Democratic Republic of the', code: 'CD'}, 
  {name: 'Cook Islands', code: 'CK'}, 
  {name: 'Costa Rica', code: 'CR'}, 
  {name: 'Cote D\'Ivoire', code: 'CI'}, 
  {name: 'Croatia', code: 'HR'}, 
  {name: 'Cuba', code: 'CU'}, 
  {name: 'Cyprus', code: 'CY'}, 
  {name: 'Czech Republic', code: 'CZ'}, 
  {name: 'Denmark', code: 'DK'}, 
  {name: 'Djibouti', code: 'DJ'}, 
  {name: 'Dominica', code: 'DM'}, 
  {name: 'Dominican Republic', code: 'DO'}, 
  {name: 'Ecuador', code: 'EC'}, 
  {name: 'Egypt', code: 'EG'}, 
  {name: 'El Salvador', code: 'SV'}, 
  {name: 'Equatorial Guinea', code: 'GQ'}, 
  {name: 'Eritrea', code: 'ER'}, 
  {name: 'Estonia', code: 'EE'}, 
  {name: 'Ethiopia', code: 'ET'}, 
  {name: 'Falkland Islands (Malvinas)', code: 'FK'}, 
  {name: 'Faroe Islands', code: 'FO'}, 
  {name: 'Fiji', code: 'FJ'}, 
  {name: 'Finland', code: 'FI'}, 
  {name: 'France', code: 'FR'}, 
  {name: 'French Guiana', code: 'GF'}, 
  {name: 'French Polynesia', code: 'PF'}, 
  {name: 'French Southern Territories', code: 'TF'}, 
  {name: 'Gabon', code: 'GA'}, 
  {name: 'Gambia', code: 'GM'}, 
  {name: 'Georgia', code: 'GE'}, 
  {name: 'Germany', code: 'DE'}, 
  {name: 'Ghana', code: 'GH'}, 
  {name: 'Gibraltar', code: 'GI'}, 
  {name: 'Greece', code: 'GR'}, 
  {name: 'Greenland', code: 'GL'}, 
  {name: 'Grenada', code: 'GD'}, 
  {name: 'Guadeloupe', code: 'GP'}, 
  {name: 'Guam', code: 'GU'}, 
  {name: 'Guatemala', code: 'GT'}, 
  {name: 'Guernsey', code: 'GG'}, 
  {name: 'Guinea', code: 'GN'}, 
  {name: 'Guinea-Bissau', code: 'GW'}, 
  {name: 'Guyana', code: 'GY'}, 
  {name: 'Haiti', code: 'HT'}, 
  {name: 'Heard Island and Mcdonald Islands', code: 'HM'}, 
  {name: 'Holy See (Vatican City State)', code: 'VA'}, 
  {name: 'Honduras', code: 'HN'}, 
  {name: 'Hong Kong', code: 'HK'}, 
  {name: 'Hungary', code: 'HU'}, 
  {name: 'Iceland', code: 'IS'}, 
  {name: 'India', code: 'IN'}, 
  {name: 'Indonesia', code: 'ID'}, 
  {name: 'Iran, Islamic Republic Of', code: 'IR'}, 
  {name: 'Iraq', code: 'IQ'}, 
  {name: 'Ireland', code: 'IE'}, 
  {name: 'Isle of Man', code: 'IM'}, 
  {name: 'Israel', code: 'IL'}, 
  {name: 'Italy', code: 'IT'}, 
  {name: 'Jamaica', code: 'JM'}, 
  {name: 'Japan', code: 'JP'}, 
  {name: 'Jersey', code: 'JE'}, 
  {name: 'Jordan', code: 'JO'}, 
  {name: 'Kazakhstan', code: 'KZ'}, 
  {name: 'Kenya', code: 'KE'}, 
  {name: 'Kiribati', code: 'KI'}, 
  {name: 'Korea, Democratic People\'S Republic of', code: 'KP'}, 
  {name: 'Korea, Republic of', code: 'KR'}, 
  {name: 'Kuwait', code: 'KW'}, 
  {name: 'Kyrgyzstan', code: 'KG'}, 
  {name: 'Lao People\'S Democratic Republic', code: 'LA'}, 
  {name: 'Latvia', code: 'LV'}, 
  {name: 'Lebanon', code: 'LB'}, 
  {name: 'Lesotho', code: 'LS'}, 
  {name: 'Liberia', code: 'LR'}, 
  {name: 'Libyan Arab Jamahiriya', code: 'LY'}, 
  {name: 'Liechtenstein', code: 'LI'}, 
  {name: 'Lithuania', code: 'LT'}, 
  {name: 'Luxembourg', code: 'LU'}, 
  {name: 'Macao', code: 'MO'}, 
  {name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'}, 
  {name: 'Madagascar', code: 'MG'}, 
  {name: 'Malawi', code: 'MW'}, 
  {name: 'Malaysia', code: 'MY'}, 
  {name: 'Maldives', code: 'MV'}, 
  {name: 'Mali', code: 'ML'}, 
  {name: 'Malta', code: 'MT'}, 
  {name: 'Marshall Islands', code: 'MH'}, 
  {name: 'Martinique', code: 'MQ'}, 
  {name: 'Mauritania', code: 'MR'}, 
  {name: 'Mauritius', code: 'MU'}, 
  {name: 'Mayotte', code: 'YT'}, 
  {name: 'Mexico', code: 'MX'}, 
  {name: 'Micronesia, Federated States of', code: 'FM'}, 
  {name: 'Moldova, Republic of', code: 'MD'}, 
  {name: 'Monaco', code: 'MC'}, 
  {name: 'Mongolia', code: 'MN'}, 
  {name: 'Montserrat', code: 'MS'}, 
  {name: 'Morocco', code: 'MA'}, 
  {name: 'Mozambique', code: 'MZ'}, 
  {name: 'Myanmar', code: 'MM'}, 
  {name: 'Namibia', code: 'NA'}, 
  {name: 'Nauru', code: 'NR'}, 
  {name: 'Nepal', code: 'NP'}, 
  {name: 'Netherlands', code: 'NL'}, 
  {name: 'Netherlands Antilles', code: 'AN'}, 
  {name: 'New Caledonia', code: 'NC'}, 
  {name: 'New Zealand', code: 'NZ'}, 
  {name: 'Nicaragua', code: 'NI'}, 
  {name: 'Niger', code: 'NE'}, 
  {name: 'Nigeria', code: 'NG'}, 
  {name: 'Niue', code: 'NU'}, 
  {name: 'Norfolk Island', code: 'NF'}, 
  {name: 'Northern Mariana Islands', code: 'MP'}, 
  {name: 'Norway', code: 'NO'}, 
  {name: 'Oman', code: 'OM'}, 
  {name: 'Pakistan', code: 'PK'}, 
  {name: 'Palau', code: 'PW'}, 
  {name: 'Palestinian Territory, Occupied', code: 'PS'}, 
  {name: 'Panama', code: 'PA'}, 
  {name: 'Papua New Guinea', code: 'PG'}, 
  {name: 'Paraguay', code: 'PY'}, 
  {name: 'Peru', code: 'PE'}, 
  {name: 'Philippines', code: 'PH'}, 
  {name: 'Pitcairn', code: 'PN'}, 
  {name: 'Poland', code: 'PL'}, 
  {name: 'Portugal', code: 'PT'}, 
  {name: 'Puerto Rico', code: 'PR'}, 
  {name: 'Qatar', code: 'QA'}, 
  {name: 'Reunion', code: 'RE'}, 
  {name: 'Romania', code: 'RO'}, 
  {name: 'Russian Federation', code: 'RU'}, 
  {name: 'RWANDA', code: 'RW'}, 
  {name: 'Saint Helena', code: 'SH'}, 
  {name: 'Saint Kitts and Nevis', code: 'KN'}, 
  {name: 'Saint Lucia', code: 'LC'}, 
  {name: 'Saint Pierre and Miquelon', code: 'PM'}, 
  {name: 'Saint Vincent and the Grenadines', code: 'VC'}, 
  {name: 'Samoa', code: 'WS'}, 
  {name: 'San Marino', code: 'SM'}, 
  {name: 'Sao Tome and Principe', code: 'ST'}, 
  {name: 'Saudi Arabia', code: 'SA'}, 
  {name: 'Senegal', code: 'SN'}, 
  {name: 'Serbia and Montenegro', code: 'CS'}, 
  {name: 'Seychelles', code: 'SC'}, 
  {name: 'Sierra Leone', code: 'SL'}, 
  {name: 'Singapore', code: 'SG'}, 
  {name: 'Slovakia', code: 'SK'}, 
  {name: 'Slovenia', code: 'SI'}, 
  {name: 'Solomon Islands', code: 'SB'}, 
  {name: 'Somalia', code: 'SO'}, 
  {name: 'South Africa', code: 'ZA'}, 
  {name: 'South Georgia and the South Sandwich Islands', code: 'GS'}, 
  {name: 'Spain', code: 'ES'}, 
  {name: 'Sri Lanka', code: 'LK'}, 
  {name: 'Sudan', code: 'SD'}, 
  {name: 'Suriname', code: 'SR'}, 
  {name: 'Svalbard and Jan Mayen', code: 'SJ'}, 
  {name: 'Swaziland', code: 'SZ'}, 
  {name: 'Sweden', code: 'SE'}, 
  {name: 'Switzerland', code: 'CH'}, 
  {name: 'Syrian Arab Republic', code: 'SY'}, 
  {name: 'Taiwan, Province of China', code: 'TW'}, 
  {name: 'Tajikistan', code: 'TJ'}, 
  {name: 'Tanzania, United Republic of', code: 'TZ'}, 
  {name: 'Thailand', code: 'TH'}, 
  {name: 'Timor-Leste', code: 'TL'}, 
  {name: 'Togo', code: 'TG'}, 
  {name: 'Tokelau', code: 'TK'}, 
  {name: 'Tonga', code: 'TO'}, 
  {name: 'Trinidad and Tobago', code: 'TT'}, 
  {name: 'Tunisia', code: 'TN'}, 
  {name: 'Turkey', code: 'TR'}, 
  {name: 'Turkmenistan', code: 'TM'}, 
  {name: 'Turks and Caicos Islands', code: 'TC'}, 
  {name: 'Tuvalu', code: 'TV'}, 
  {name: 'Uganda', code: 'UG'}, 
  {name: 'Ukraine', code: 'UA'}, 
  {name: 'United Arab Emirates', code: 'AE'}, 
  {name: 'United Kingdom', code: 'GB'}, 
  {name: 'United States', code: 'US'}, 
  {name: 'United States Minor Outlying Islands', code: 'UM'}, 
  {name: 'Uruguay', code: 'UY'}, 
  {name: 'Uzbekistan', code: 'UZ'}, 
  {name: 'Vanuatu', code: 'VU'}, 
  {name: 'Venezuela', code: 'VE'}, 
  {name: 'Viet Nam', code: 'VN'}, 
  {name: 'Virgin Islands, British', code: 'VG'}, 
  {name: 'Virgin Islands, U.S.', code: 'VI'}, 
  {name: 'Wallis and Futuna', code: 'WF'}, 
  {name: 'Western Sahara', code: 'EH'}, 
  {name: 'Yemen', code: 'YE'}, 
  {name: 'Zambia', code: 'ZM'}, 
  {name: 'Zimbabwe', code: 'ZW'} 
]

export const nftCollection = [
  {
   image:chimp,
   price:0.09,
   type:'Single',
   title:'Honeyfox',
   text:'molax honey fox tale',
   cta:'Proin porta, metus et tempus pulvinar velit',
   url:'http:opensea.io/092kj-Token209RE',
   description:'Etiam rutrum aliquam pretium. Etiam tincidunt egestas lobortis. Curabitur ornare condimentum dolor non aliquam. Nam aliquet, est quis iaculis porttitor, est erat tristique turpis.'
  },
  {
    image:dog,
    price:0.09,
    type:'Collection',
    total:9,
    title:'Honeyfox',
    cta:'Proin porta, metus et tempus pulvinar velit',
    url:'http:opensea.io/092kj-Token209RE',
    description:'Etiam rutrum aliquam pretium. Etiam tincidunt egestas lobortis. Curabitur ornare condimentum dolor non aliquam. Nam aliquet, est quis iaculis porttitor, est erat tristique turpis.'
   },
   {
    image:honeyFox,
    price:0.09,
    type:'Single',
    title:'Honeyfox',
    cta:'Proin porta, metus et tempus pulvinar velit',
    url:'http:opensea.io/092kj-Token209RE',
    description:'Etiam rutrum aliquam pretium. Etiam tincidunt egestas lobortis. Curabitur ornare condimentum dolor non aliquam. Nam aliquet, est quis iaculis porttitor, est erat tristique turpis.'
   },
   {
    image:chimp,
    price:0.09,
    type:'Collection',
    total:9,
    title:'Honeyfox',
    cta:'Proin porta, metus et tempus pulvinar velit',
    url:'http:opensea.io/092kj-Token209RE',
    description:'Etiam rutrum aliquam pretium. Etiam tincidunt egestas lobortis. Curabitur ornare condimentum dolor non aliquam. Nam aliquet, est quis iaculis porttitor, est erat tristique turpis.'
   },
   {
     image:dog,
     price:0.09,
     type:'Single',
     title:'Honeyfox',
     text:'molax honey fox tale',
     cta:'Proin porta, metus et tempus pulvinar velit',
     url:'http:opensea.io/092kj-Token209RE',
     description:'Etiam rutrum aliquam pretium. Etiam tincidunt egestas lobortis. Curabitur ornare condimentum dolor non aliquam. Nam aliquet, est quis iaculis porttitor, est erat tristique turpis.'
    },
    {
     image:honeyFox,
     price:0.09,
     type:'Collection',
     total:9,
     title:'Honeyfox',
     text:'molax honey fox tale',
     cta:'Proin porta, metus et tempus pulvinar velit',
     url:'http:opensea.io/092kj-Token209RE',
     description:'Etiam rutrum aliquam pretium. Etiam tincidunt egestas lobortis. Curabitur ornare condimentum dolor non aliquam. Nam aliquet, est quis iaculis porttitor, est erat tristique turpis.'
    },
    {
      image:chimp,
      price:0.09,
      type:'Single',
      title:'Honeyfox',
      text:'molax honey fox tale',
      cta:'Proin porta, metus et tempus pulvinar velit',
      url:'http:opensea.io/092kj-Token209RE',
      description:'Etiam rutrum aliquam pretium. Etiam tincidunt egestas lobortis. Curabitur ornare condimentum dolor non aliquam. Nam aliquet, est quis iaculis porttitor, est erat tristique turpis.'
     },
     {
       image:dog,
       price:0.09,
       type:'Collection',
       total:9,
       title:'Honeyfox',
       text:'molax honey fox tale',
       cta:'Proin porta, metus et tempus pulvinar velit',
       url:'http:opensea.io/092kj-Token209RE',
       description:'Etiam rutrum aliquam pretium. Etiam tincidunt egestas lobortis. Curabitur ornare condimentum dolor non aliquam. Nam aliquet, est quis iaculis porttitor, est erat tristique turpis.'
      },
      {
       image:honeyFox,
       price:0.09,
       type:'Single',
       title:'Honeyfox',
       text:'molax honey fox tale',
       cta:'Proin porta, metus et tempus pulvinar velit',
       url:'http:opensea.io/092kj-Token209RE',
       description:'Etiam rutrum aliquam pretium. Etiam tincidunt egestas lobortis. Curabitur ornare condimentum dolor non aliquam. Nam aliquet, est quis iaculis porttitor, est erat tristique turpis.'
      },
      {
        image:chimp,
        price:0.09,
        type:'Collection',
        total:9,
        title:'Honeyfox',
        text:'molax honey fox tale',
        cta:'Proin porta, metus et tempus pulvinar velit',
        url:'http:opensea.io/092kj-Token209RE',
        description:'Etiam rutrum aliquam pretium. Etiam tincidunt egestas lobortis. Curabitur ornare condimentum dolor non aliquam. Nam aliquet, est quis iaculis porttitor, est erat tristique turpis.'
       },
       {
         image:dog,
         price:0.09,
         type:'Single',
         title:'Honeyfox',
         text:'molax honey fox tale',
         cta:'Proin porta, metus et tempus pulvinar velit',
         url:'http:opensea.io/092kj-Token209RE',
         description:'Etiam rutrum aliquam pretium. Etiam tincidunt egestas lobortis. Curabitur ornare condimentum dolor non aliquam. Nam aliquet, est quis iaculis porttitor, est erat tristique turpis.'
        },
        {
         image:honeyFox,
         price:0.09,
         type:'Collection',
         total:9,
         title:'Honeyfox',
         text:'molax honey fox tale',
         cta:'Proin porta, metus et tempus pulvinar velit',
         url:'http:opensea.io/092kj-Token209RE',
         description:'Etiam rutrum aliquam pretium. Etiam tincidunt egestas lobortis. Curabitur ornare condimentum dolor non aliquam. Nam aliquet, est quis iaculis porttitor, est erat tristique turpis.'
        },
        {
          image:chimp,
          price:0.09,
          type:'Single',
          title:'Honeyfox',
   text:'molax honey fox tale',
   cta:'Proin porta, metus et tempus pulvinar velit',
   url:'http:opensea.io/092kj-Token209RE',
   description:'Etiam rutrum aliquam pretium. Etiam tincidunt egestas lobortis. Curabitur ornare condimentum dolor non aliquam. Nam aliquet, est quis iaculis porttitor, est erat tristique turpis.'
         },
         {
           image:dog,
           price:0.09,
           total:9,
           type:'Collection',
           title:'Honeyfox',
   text:'molax honey fox tale',
   cta:'Proin porta, metus et tempus pulvinar velit',
   url:'http:opensea.io/092kj-Token209RE',
   description:'Etiam rutrum aliquam pretium. Etiam tincidunt egestas lobortis. Curabitur ornare condimentum dolor non aliquam. Nam aliquet, est quis iaculis porttitor, est erat tristique turpis.'
          },
          {
           image:honeyFox,
           price:0.09,
           type:'Single',
           title:'Honeyfox',
   text:'molax honey fox tale',
   cta:'Proin porta, metus et tempus pulvinar velit',
   url:'http:opensea.io/092kj-Token209RE',
   description:'Etiam rutrum aliquam pretium. Etiam tincidunt egestas lobortis. Curabitur ornare condimentum dolor non aliquam. Nam aliquet, est quis iaculis porttitor, est erat tristique turpis.'
          },
          {
            image:chimp,
            price:0.09,
            type:'Collection',
            total:9,
            title:'Honeyfox',
   text:'molax honey fox tale',
   cta:'Proin porta, metus et tempus pulvinar velit',
   url:'http:opensea.io/092kj-Token209RE',
   description:'Etiam rutrum aliquam pretium. Etiam tincidunt egestas lobortis. Curabitur ornare condimentum dolor non aliquam. Nam aliquet, est quis iaculis porttitor, est erat tristique turpis.'
           },
           {
             image:dog,
             price:0.09,
             type:'Single',
             title:'Honeyfox',
   text:'molax honey fox tale',
   cta:'Proin porta, metus et tempus pulvinar velit',
   url:'http:opensea.io/092kj-Token209RE',
   description:'Etiam rutrum aliquam pretium. Etiam tincidunt egestas lobortis. Curabitur ornare condimentum dolor non aliquam. Nam aliquet, est quis iaculis porttitor, est erat tristique turpis.'
            },
            {
             image:honeyFox,
             price:0.09,
             type:'Collection',
             total:9,
             title:'Honeyfox',
   text:'molax honey fox tale',
   cta:'Proin porta, metus et tempus pulvinar velit',
   url:'http:opensea.io/092kj-Token209RE',
   description:'Etiam rutrum aliquam pretium. Etiam tincidunt egestas lobortis. Curabitur ornare condimentum dolor non aliquam. Nam aliquet, est quis iaculis porttitor, est erat tristique turpis.'
            },
]