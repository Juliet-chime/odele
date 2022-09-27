import { FaDiscord, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"
import coinbase from "../public/images/pictures/NFTWallet/coinbase.png"
import metaMask from "../public/images/pictures/NFTWallet/MetaMask.png"
import phantom from "../public/images/pictures/NFTWallet/phantom.png"
import walletConnect from "../public/images/pictures/NFTWallet/walletconnect.png"
import odeleLogo from "../public/images/icons/odeleLogowhite.svg"
import campaign from "../public/images/icons/campaign.svg"
import wallet from "../public/images/icons/money.svg"
import profile from "../public/images/icons/profile.svg"
import settings from "../public/images/icons/settings.svg"
import about from "../public/images/icons/about.svg"
import chimp from "../public/images/pictures/chimp.png"
import dog from "../public/images/pictures/dog.png"
import honeyFox from "../public/images/pictures/honeyFox.png"
import conversion from "../public/images/icons/conversion.svg"
import sales from "../public/images/icons/sales.svg"
import cpc from "../public/images/icons/cpc.svg"
import clicks from "../public/images/icons/clicks.svg"
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
        image: campaign,
        link : '/createcampaign',
        title: 'Campaign'
      },
      {
        image: wallet,
        link : '/campaign',
        title: 'Wallet'
      },
      {
        image: profile,
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