import { InsertCar } from "@shared/schema";
import { nanoid } from "nanoid";

// Helper function to get official car images using manufacturer websites
const getCarImage = (manufacturer: string, model: string) => {
  // Default fallback image in case we can't match the car
  const fallbackUrl = "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=800&h=600&auto=format&fit=crop";
  
  try {
    // Match the car to its official image using manufacturer websites
    const manufacturerLower = manufacturer.toLowerCase();
    const modelLower = model.toLowerCase();
    
    // Acura
    if (manufacturerLower === 'acura') {
      if (modelLower.includes('zdx')) {
        return "https://www.acura.com/-/media/Acura-Platform/Vehicle-Pages/ZDX/2024/overview/01-ZDX-Advance/Gallery/10-exterior-carousel/H02_2024_ZDX_Adv_Plat_Snow_Fnt34_GW.jpg";
      }
    }
    
    // Audi
    else if (manufacturerLower === 'audi') {
      if (modelLower.includes('q4 e-tron')) {
        return "https://www.audiusa.com/content/dam/nemo/us/models/Q4-e-tron/q4-e-tron/2024/gallery/1920x1080/2024-Q4-e-tron-sportback-gallery-B01-021.jpg";
      } else if (modelLower.includes('q6 e-tron')) {
        return "https://www.audiusa.com/content/dam/nemo/us/models/Q6-e-tron/Q6-e-tron/2025/gallery/exterior/2025-q6-e-tron-gallery-NM-A01-121.jpg";
      } else if (modelLower.includes('q8 e-tron')) {
        return "https://www.audiusa.com/content/dam/nemo/us/models/Q8-e-tron/Q8-e-tron/2024/gallery/1920x1080/Audi_Q8_e-tron_B3_191023_Small.jpg";
      } else if (modelLower.includes('e-tron gt')) {
        return "https://www.audiusa.com/content/dam/nemo/us/models/e-tron-gt/e-tron-gt/2024/gallery/1920x1080/2024-e-tron-GT-gallery-2-1920x1080.jpg";
      }
    }
    
    // Tesla
    else if (manufacturerLower === 'tesla') {
      if (modelLower.includes('model 3')) {
        return "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-3.png";
      } else if (modelLower.includes('model y')) {
        return "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-Y.png";
      } else if (modelLower.includes('model s')) {
        return "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-S.png";
      } else if (modelLower.includes('model x')) {
        return "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-X.png";
      } else if (modelLower.includes('cybertruck')) {
        return "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Cybertruck-Desktop.jpg";
      }
    } 
    
    // Rivian
    else if (manufacturerLower === 'rivian') {
      if (modelLower.includes('r1t')) {
        return "https://images.rivian.com/2md5qhoeajym/48RNgYxFGk9qRUKF7WgVn3/ca26d3de07e544de7ea5aa819ec33e39/R1T-9-2_R1T_SonoBlue_34Front_Beach.jpg";
      } else if (modelLower.includes('r1s')) {
        return "https://images.rivian.com/2md5qhoeajym/7EQIF1Wd3hynvQQyfTTpzL/6c6c723b03553cce07d61a89c33be750/R1S-9-2_R1S_SonoBlue_34Front_Beach.jpg";
      }
    } 
    
    // Lucid
    else if (manufacturerLower === 'lucid') {
      return "https://lucidmotors.com/themes/custom/lucid_motors/assets/images/2023/Air/gray-drive-forward.jpg";
    }
    
    // Ford
    else if (manufacturerLower === 'ford') {
      if (modelLower.includes('mustang mach-e')) {
        return "https://www.ford.com/cmslibs/content/dam/vdm_ford/live/en_us/ford/nameplate/mustangmache/2023/collections/equipment/3-2/23_FRD_MST_MHE_PremAWD_RR_SD_52_Desktop.jpg";
      } else if (modelLower.includes('f-150 lightning')) {
        return "https://www.ford.com/cmslibs/content/dam/vdm_ford/live/en_us/ford/nameplate/f-150lightning/2023/collections/dm/22_FRD_F15_LTG_ER_Platinum_AGG_SD2_52_Desktop.jpg";
      }
    }
    
    // BMW
    else if (manufacturerLower === 'bmw') {
      if (modelLower.includes('i4')) {
        return "https://images.unsplash.com/photo-1631729113129-aca0fcd4427c?q=80&w=800&h=600&auto=format&fit=crop";
      } else if (modelLower.includes('i5')) {
        return "https://images.unsplash.com/photo-1617814085901-7fdb1ab30d3c?q=80&w=800&h=600&auto=format&fit=crop";
      } else if (modelLower.includes('i7')) {
        return "https://images.unsplash.com/photo-1669739435835-7a6de5c7083e?q=80&w=800&h=600&auto=format&fit=crop";
      } else if (modelLower.includes('ix')) {
        return "https://images.unsplash.com/photo-1641389294781-3483857ea9f4?q=80&w=800&h=600&auto=format&fit=crop";
      }
      return "https://images.unsplash.com/photo-1631729113129-aca0fcd4427c?q=80&w=800&h=600&auto=format&fit=crop";
    }
    
    // Porsche
    else if (manufacturerLower === 'porsche') {
      if (modelLower.includes('taycan')) {
        return "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&h=600&auto=format&fit=crop";
      } else if (modelLower.includes('macan')) {
        return "https://images.unsplash.com/photo-1682687980961-78fa83781450?q=80&w=800&h=600&auto=format&fit=crop";
      }
      return "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&h=600&auto=format&fit=crop";
    }
    
    // Hyundai
    else if (manufacturerLower === 'hyundai') {
      if (modelLower.includes('ioniq 5')) {
        return "https://images.unsplash.com/photo-1652623541838-c3d6a2fc0ae6?q=80&w=800&h=600&auto=format&fit=crop";
      } else if (modelLower.includes('ioniq 6')) {
        return "https://images.unsplash.com/photo-1675274094327-153bdc517672?q=80&w=800&h=600&auto=format&fit=crop";
      } else if (modelLower.includes('kona')) {
        return "https://images.unsplash.com/photo-1617650728468-8528ec39e907?q=80&w=800&h=600&auto=format&fit=crop";
      }
      return "https://images.unsplash.com/photo-1652623541838-c3d6a2fc0ae6?q=80&w=800&h=600&auto=format&fit=crop";
    }
    
    // Kia
    else if (manufacturerLower === 'kia') {
      if (modelLower.includes('ev6')) {
        return "https://images.unsplash.com/photo-1652523168455-39e65f028459?q=80&w=800&h=600&auto=format&fit=crop";
      } else if (modelLower.includes('ev9')) {
        return "https://images.unsplash.com/photo-1686917290424-e3ce505e387c?q=80&w=800&h=600&auto=format&fit=crop";
      } else if (modelLower.includes('niro')) {
        return "https://images.unsplash.com/photo-1641109545069-4a81cc03d555?q=80&w=800&h=600&auto=format&fit=crop";
      }
      return "https://images.unsplash.com/photo-1652523168455-39e65f028459?q=80&w=800&h=600&auto=format&fit=crop";
    }
    
    // Mercedes-Benz
    else if (manufacturerLower === 'mercedes-benz') {
      if (modelLower.includes('eqs sedan')) {
        return "https://images.unsplash.com/photo-1658750282860-84bf05a5a2f9?q=80&w=800&h=600&auto=format&fit=crop";
      } else if (modelLower.includes('eqs suv')) {
        return "https://images.unsplash.com/photo-1671173488902-bbf77d93b542?q=80&w=800&h=600&auto=format&fit=crop";
      } else if (modelLower.includes('eqe')) {
        return "https://images.unsplash.com/photo-1672239142020-5afb53580e82?q=80&w=800&h=600&auto=format&fit=crop";
      } else if (modelLower.includes('eqb')) {
        return "https://images.unsplash.com/photo-1671539132563-cb3ae1032149?q=80&w=800&h=600&auto=format&fit=crop";
      } else if (modelLower.includes('maybach')) {
        return "https://images.unsplash.com/photo-1586803884768-95e9b8898fe7?q=80&w=800&h=600&auto=format&fit=crop";
      }
      return "https://images.unsplash.com/photo-1658750282860-84bf05a5a2f9?q=80&w=800&h=600&auto=format&fit=crop";
    }
    
    // Volkswagen
    else if (manufacturerLower === 'volkswagen') {
      if (modelLower.includes('id.4')) {
        return "https://images.unsplash.com/photo-1617806501252-9b21a5f7f357?q=80&w=800&h=600&auto=format&fit=crop";
      } else if (modelLower.includes('id. buzz')) {
        return "https://images.unsplash.com/photo-1656468014942-ce1a5c5a8c2d?q=80&w=800&h=600&auto=format&fit=crop";
      }
      return "https://images.unsplash.com/photo-1617806501252-9b21a5f7f357?q=80&w=800&h=600&auto=format&fit=crop";
    }
    
    // Chevrolet
    else if (manufacturerLower === 'chevrolet') {
      if (modelLower.includes('bolt')) {
        return "https://images.unsplash.com/photo-1655410584108-6a3bb9ebc27f?q=80&w=800&h=600&auto=format&fit=crop";
      } else if (modelLower.includes('blazer ev')) {
        return "https://images.unsplash.com/photo-1694517183128-3fb6682e437f?q=80&w=800&h=600&auto=format&fit=crop";
      } else if (modelLower.includes('equinox ev')) {
        return "https://images.unsplash.com/photo-1693416789524-390473e3dc1d?q=80&w=800&h=600&auto=format&fit=crop";
      } else if (modelLower.includes('silverado ev')) {
        return "https://images.unsplash.com/photo-1685117313886-d1a8820cd533?q=80&w=800&h=600&auto=format&fit=crop";
      }
      return "https://images.unsplash.com/photo-1655410584108-6a3bb9ebc27f?q=80&w=800&h=600&auto=format&fit=crop";
    }
    
    // Polestar
    else if (manufacturerLower === 'polestar') {
      if (modelLower.includes('2')) {
        return "https://images.unsplash.com/photo-1650459267700-c00486a0fb9b?q=80&w=800&h=600&auto=format&fit=crop";
      } else if (modelLower.includes('3')) {
        return "https://images.unsplash.com/photo-1673809625545-aac13096d780?q=80&w=800&h=600&auto=format&fit=crop";
      } else if (modelLower.includes('4')) {
        return "https://images.unsplash.com/photo-1687370074665-95d4395292dd?q=80&w=800&h=600&auto=format&fit=crop";
      }
      return "https://images.unsplash.com/photo-1650459267700-c00486a0fb9b?q=80&w=800&h=600&auto=format&fit=crop";
    }
    
    // Volvo
    else if (manufacturerLower === 'volvo') {
      if (modelLower.includes('ex30')) {
        return "https://images.unsplash.com/photo-1697654632148-e4b303b693ad?q=80&w=800&h=600&auto=format&fit=crop";
      } else if (modelLower.includes('ex90')) {
        return "https://images.unsplash.com/photo-1656337053884-6681aff56a5b?q=80&w=800&h=600&auto=format&fit=crop";
      } else if (modelLower.includes('c40')) {
        return "https://images.unsplash.com/photo-1623098947685-0f3588472e1b?q=80&w=800&h=600&auto=format&fit=crop";
      } else if (modelLower.includes('xc40')) {
        return "https://images.unsplash.com/photo-1626668893632-6f3a4466d195?q=80&w=800&h=600&auto=format&fit=crop";
      }
      return "https://images.unsplash.com/photo-1623098947685-0f3588472e1b?q=80&w=800&h=600&auto=format&fit=crop";
    }
    
    // Nissan
    else if (manufacturerLower === 'nissan') {
      if (modelLower.includes('leaf')) {
        return "https://images.unsplash.com/photo-1613214956818-240656cfcad9?q=80&w=800&h=600&auto=format&fit=crop";
      } else if (modelLower.includes('ariya')) {
        return "https://images.unsplash.com/photo-1663331021283-82ca7e3f206d?q=80&w=800&h=600&auto=format&fit=crop";
      }
      return "https://images.unsplash.com/photo-1613214956818-240656cfcad9?q=80&w=800&h=600&auto=format&fit=crop";
    }
    
    // Generic EV image based on body type if no specific model/manufacturer match is found
    return `https://images.unsplash.com/photo-1620891549027-942faa56a5d8?q=80&w=800&h=600&auto=format&fit=crop`;
  } catch (error) {
    // If anything fails, return a fallback image
    return fallbackUrl;
  }
};

// Helper function to get vehicle type based on size class (legacy)
const getVehicleType = (sizeClass: string): string => {
  if (sizeClass.toLowerCase().includes('suv')) return 'suv';
  if (sizeClass.toLowerCase().includes('sedan')) return 'sedan';
  if (sizeClass.toLowerCase().includes('hatchback')) return 'hatchback';
  if (sizeClass.toLowerCase().includes('truck')) return 'truck';
  if (sizeClass.toLowerCase().includes('van')) return 'van';
  if (sizeClass.toLowerCase().includes('coupe')) return 'coupe';
  return 'other';
};

// Helper function to get body style (legacy)
const getBodyStyle = (sizeClass: string): string => {
  if (sizeClass.toLowerCase().includes('suv')) return 'SUV';
  if (sizeClass.toLowerCase().includes('sedan')) return 'Sedan';
  if (sizeClass.toLowerCase().includes('hatchback')) return 'Hatchback';
  if (sizeClass.toLowerCase().includes('truck')) return 'Truck';
  if (sizeClass.toLowerCase().includes('van')) return 'Van';
  if (sizeClass.toLowerCase().includes('coupe')) return 'Coupe';
  if (sizeClass.toLowerCase().includes('wagon')) return 'Wagon';
  return 'Crossover';
};

// Helper function to get size class simplified (legacy)
const getSizeClass = (sizeClass: string): string => {
  if (sizeClass.toLowerCase().includes('full-size')) return 'Full-size';
  if (sizeClass.toLowerCase().includes('mid-size')) return 'Mid-size';
  if (sizeClass.toLowerCase().includes('compact')) return 'Compact';
  if (sizeClass.toLowerCase().includes('subcompact')) return 'Subcompact';
  return 'Mid-size';
};

// Helper function to get number of seats based on vehicle type (legacy)
const getSeats = (sizeClass: string): number => {
  if (sizeClass.toLowerCase().includes('three-row')) return 7;
  if (sizeClass.toLowerCase().includes('suv') && sizeClass.toLowerCase().includes('full-size')) return 6;
  if (sizeClass.toLowerCase().includes('suv')) return 5;
  if (sizeClass.toLowerCase().includes('sedan')) return 5;
  if (sizeClass.toLowerCase().includes('truck')) return 5;
  if (sizeClass.toLowerCase().includes('van')) return 7;
  if (sizeClass.toLowerCase().includes('coupe')) return 4;

// NEW HELPERS FOR UPDATED DATA FORMAT

// Helper function to get vehicle type based on body_style
const getBodyTypeFromString = (bodyStyle: string): string => {
  if (!bodyStyle) return 'other';
  
  const lowercase = bodyStyle.toLowerCase();
  if (lowercase.includes('suv')) return 'suv';
  if (lowercase.includes('sedan')) return 'sedan';
  if (lowercase.includes('hatchback')) return 'hatchback';
  if (lowercase.includes('truck')) return 'truck';
  if (lowercase.includes('van')) return 'van';
  if (lowercase.includes('coupe')) return 'coupe';
  if (lowercase.includes('wagon')) return 'wagon';
  return 'other';
};

// Helper function to get number of seats based on size and body style
const getSeatsFromSize = (size: string, bodyStyle: string): number => {
  if (!size || !bodyStyle) return 5;
  
  const lowerBodyStyle = bodyStyle.toLowerCase();
  const lowerSize = size.toLowerCase();
  
  // Three-row vehicles
  if (lowerBodyStyle.includes('three-row')) return 7;
  
  // By vehicle type
  if (lowerBodyStyle.includes('van')) return 7;
  if (lowerBodyStyle.includes('truck')) return 5;
  if (lowerBodyStyle.includes('coupe')) return 4;
  
  // By size
  if (lowerSize.includes('full')) return 6;
  if (lowerSize.includes('mid')) return 5;
  if (lowerSize.includes('compact')) return 5;
  if (lowerSize.includes('subcompact')) return 4;
  
  return 5;
};
  if (sizeClass.toLowerCase().includes('hatchback')) return 5;
  return 5;
};

// Helper function to calculate price based on segment and range
const calculatePrice = (segment: string, range: number): number => {
  let basePrice = 60;
  
  // Adjust for segment
  if (segment === 'Luxury') basePrice = 110;
  else if (segment === 'Premium') basePrice = 90;
  else basePrice = 70;
  
  // Adjust for range (longer range = higher price)
  const rangeMultiplier = range / 300;
  const adjustedPrice = Math.round(basePrice * rangeMultiplier);
  
  // Ensure price is within reasonable bounds
  return Math.min(Math.max(adjustedPrice, 50), 250);
};

// Helper function to generate random EV features
const generateFeatures = (segment: string, model: string, oem: string): string[] => {
  const baseFeatures = [
    "Fast Charging Capability",
    "Regenerative Braking",
    "Keyless Entry",
    "Bluetooth Connectivity",
    "Apple CarPlay & Android Auto"
  ];
  
  const premiumFeatures = [
    "Panoramic Glass Roof",
    "Wireless Charging",
    "Advanced Driver Assistance",
    "Premium Sound System"
  ];
  
  const luxuryFeatures = [
    "Massage Seats",
    "Executive Rear Seating",
    "Cabin Air Purification",
    "Augmented Reality Navigation",
    "800-Volt Architecture"
  ];
  
  // Special features for certain brands/models
  const specialFeatures: Record<string, string[]> = {
    "Cadillac": ["Super Cruise Hands-Free Driving"],
    "Tesla": ["Autopilot", "Sentry Mode"],
    "Rivian": ["Camp Mode", "Off-Road Capabilities"],
    "Porsche": ["Performance Driving Modes", "Thermal Management System"],
    "BMW": ["iDrive System", "Gesture Control"],
    "Mercedes-Benz": ["MBUX Hyperscreen", "Energizing Comfort Control"]
  };
  
  let carFeatures = [...baseFeatures];
  
  if (segment === 'Premium' || segment === 'Luxury') {
    carFeatures = [...carFeatures, ...premiumFeatures];
  }
  
  if (segment === 'Luxury') {
    carFeatures = [...carFeatures, ...luxuryFeatures];
  }
  
  // Add special features if available for this brand
  if (specialFeatures[oem]) {
    carFeatures = [...carFeatures, ...specialFeatures[oem]];
  }
  
  // Randomly select 5-8 features to avoid having too many
  const shuffled = carFeatures.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.floor(Math.random() * 3) + 5);
};

// Convert raw EV data to our car schema format
export const carsByManufacturer: Record<string, InsertCar[]> = {};

// Raw EV data from the provided list
const evData = [
  // Acura
  { oem: "Acura", model: "ZDX", drivetrain: "RWD", range_miles: "313", battery_size: "102 kWh", size: "Mid-size", body_style: "SUV", segment: "Premium" },
  { oem: "Acura", model: "ZDX", drivetrain: "AWD", range_miles: "304", battery_size: "102 kWh", size: "Mid-size", body_style: "SUV", segment: "Premium" },
  // Audi
  { oem: "Audi", model: "Q4 e-tron", drivetrain: "RWD", range_miles: "288", battery_kwh: "77", size_class: "Compact SUV", segment: "Luxury" },
  { oem: "Audi", model: "Q4 e-tron", drivetrain: "AWD", range_miles: "258", battery_kwh: "77", size_class: "Compact SUV", segment: "Luxury" },
  { oem: "Audi", model: "Q6 e-tron", drivetrain: "RWD", range_miles: "321", battery_kwh: "95", size_class: "Compact SUV", segment: "Luxury" },
  { oem: "Audi", model: "Q6 e-tron", drivetrain: "AWD", range_miles: "319", battery_kwh: "95", size_class: "Compact SUV", segment: "Luxury" },
  { oem: "Audi", model: "Q8 e-tron", drivetrain: "AWD", range_miles: "285", battery_kwh: "106", size_class: "Mid-size SUV", segment: "Luxury" },
  { oem: "Audi", model: "e-tron GT", drivetrain: "AWD", range_miles: "300", battery_kwh: "97", size_class: "Full-size Sedan", segment: "Luxury" },
  { oem: "Audi", model: "RS e-tron GT", drivetrain: "AWD", range_miles: "300", battery_kwh: "97", size_class: "Full-size Sedan", segment: "Luxury" },
  // BMW
  { oem: "BMW", model: "i4", drivetrain: "RWD", range_miles: "318", battery_kwh: "81", size_class: "Compact Sedan", segment: "Luxury" },
  { oem: "BMW", model: "i4", drivetrain: "AWD", range_miles: "270", battery_kwh: "81", size_class: "Compact Sedan", segment: "Luxury" },
  { oem: "BMW", model: "i5", drivetrain: "RWD", range_miles: "321", battery_kwh: "81", size_class: "Mid-size Sedan", segment: "Luxury" },
  { oem: "BMW", model: "i5", drivetrain: "AWD", range_miles: "265", battery_kwh: "81", size_class: "Mid-size Sedan", segment: "Luxury" },
  { oem: "BMW", model: "i7", drivetrain: "RWD", range_miles: "311", battery_kwh: "102", size_class: "Full-size Sedan", segment: "Luxury" },
  { oem: "BMW", model: "i7", drivetrain: "AWD", range_miles: "324", battery_kwh: "102", size_class: "Full-size Sedan", segment: "Luxury" },
  { oem: "BMW", model: "iX", drivetrain: "AWD", range_miles: "377", battery_kwh: "106", size_class: "Mid-size SUV", segment: "Luxury" },
  // Cadillac
  { oem: "Cadillac", model: "Lyriq", drivetrain: "RWD", range_miles: "326", battery_kwh: "102", size_class: "Mid-size SUV", segment: "Luxury" },
  { oem: "Cadillac", model: "Lyriq", drivetrain: "AWD", range_miles: "318", battery_kwh: "102", size_class: "Mid-size SUV", segment: "Luxury" },
  { oem: "Cadillac", model: "Escalade IQ", drivetrain: "AWD", range_miles: "460", battery_kwh: "200", size_class: "Full-size SUV", segment: "Luxury" },
  { oem: "Cadillac", model: "Celestiq", drivetrain: "AWD", range_miles: "450", battery_kwh: "111", size_class: "Full-size Sedan", segment: "Luxury" },
  { oem: "Cadillac", model: "Optiq", drivetrain: "AWD", range_miles: "300", battery_kwh: "85", size_class: "Compact SUV", segment: "Luxury" },
  { oem: "Cadillac", model: "Vistiq", drivetrain: "AWD", range_miles: "315", battery_kwh: "102", size_class: "Mid-size SUV", segment: "Luxury" },
  // Chevrolet
  { oem: "Chevrolet", model: "Blazer EV", drivetrain: "FWD", range_miles: "293", battery_kwh: "85", size_class: "Mid-size SUV", segment: "Mainstream" },
  { oem: "Chevrolet", model: "Blazer EV", drivetrain: "RWD", range_miles: "334", battery_kwh: "102", size_class: "Mid-size SUV", segment: "Mainstream" },
  { oem: "Chevrolet", model: "Blazer EV", drivetrain: "AWD", range_miles: "283", battery_kwh: "85", size_class: "Mid-size SUV", segment: "Mainstream" },
  { oem: "Chevrolet", model: "Equinox EV", drivetrain: "FWD", range_miles: "319", battery_kwh: "85", size_class: "Compact SUV", segment: "Mainstream" },
  { oem: "Chevrolet", model: "Equinox EV", drivetrain: "AWD", range_miles: "307", battery_kwh: "85", size_class: "Compact SUV", segment: "Mainstream" },
  { oem: "Chevrolet", model: "Silverado EV", drivetrain: "AWD", range_miles: "492", battery_kwh: "200", size_class: "Full-size Truck", segment: "Mainstream" },
  // Dodge
  { oem: "Dodge", model: "Charger Daytona EV R/T", drivetrain: "AWD", range_miles: "317", battery_kwh: "100", size_class: "Full-size Sedan", segment: "Mainstream" },
  { oem: "Dodge", model: "Charger Daytona EV Scat Pack", drivetrain: "AWD", range_miles: "260", battery_kwh: "100", size_class: "Full-size Sedan", segment: "Mainstream" },
  // Fiat
  { oem: "Fiat", model: "500e", drivetrain: "FWD", range_miles: "149", battery_kwh: "37", size_class: "Subcompact Hatchback", segment: "Mainstream" },
  // Ford
  { oem: "Ford", model: "Mustang Mach-E", drivetrain: "RWD", range_miles: "320", battery_kwh: "91", size_class: "Compact SUV", segment: "Mainstream" },
  { oem: "Ford", model: "Mustang Mach-E", drivetrain: "AWD", range_miles: "300", battery_kwh: "91", size_class: "Compact SUV", segment: "Mainstream" },
  { oem: "Ford", model: "F-150 Lightning", drivetrain: "AWD", range_miles: "320", battery_kwh: "131", size_class: "Full-size Truck", segment: "Mainstream" },
  { oem: "Ford", model: "E-Transit", drivetrain: "RWD", range_miles: "159", battery_kwh: "68", size_class: "Van", segment: "Mainstream" },
  // Genesis
  { oem: "Genesis", model: "GV60", drivetrain: "AWD", range_miles: "248", battery_kwh: "77", size_class: "Compact SUV", segment: "Luxury" },
  { oem: "Genesis", model: "Electrified GV70", drivetrain: "AWD", range_miles: "236", battery_kwh: "77", size_class: "Compact SUV", segment: "Luxury" },
  { oem: "Genesis", model: "Electrified G80", drivetrain: "AWD", range_miles: "282", battery_kwh: "87", size_class: "Mid-size Sedan", segment: "Luxury" },
  // GMC
  { oem: "GMC", model: "Hummer EV Pickup", drivetrain: "AWD", range_miles: "381", battery_kwh: "205", size_class: "Full-size Truck", segment: "Premium" },
  { oem: "GMC", model: "Hummer EV SUV", drivetrain: "AWD", range_miles: "314", battery_kwh: "205", size_class: "Full-size SUV", segment: "Premium" },
  { oem: "GMC", model: "Sierra EV", drivetrain: "AWD", range_miles: "460", battery_kwh: "200", size_class: "Full-size Truck", segment: "Premium" },
  // Honda
  { oem: "Honda", model: "Prologue", drivetrain: "FWD", range_miles: "308", battery_kwh: "85", size_class: "Mid-size SUV", segment: "Mainstream" },
  { oem: "Honda", model: "Prologue", drivetrain: "AWD", range_miles: "283", battery_kwh: "85", size_class: "Mid-size SUV", segment: "Mainstream" },
  // Hyundai
  { oem: "Hyundai", model: "Ioniq 5", drivetrain: "RWD", range_miles: "318", battery_kwh: "84", size_class: "Compact SUV", segment: "Mainstream" },
  { oem: "Hyundai", model: "Ioniq 5", drivetrain: "AWD", range_miles: "290", battery_kwh: "84", size_class: "Compact SUV", segment: "Mainstream" },
  { oem: "Hyundai", model: "Ioniq 5 N", drivetrain: "AWD", range_miles: "221", battery_kwh: "84", size_class: "Compact SUV", segment: "Mainstream" },
  { oem: "Hyundai", model: "Ioniq 6", drivetrain: "RWD", range_miles: "361", battery_kwh: "77", size_class: "Mid-size Sedan", segment: "Mainstream" },
  { oem: "Hyundai", model: "Ioniq 6", drivetrain: "AWD", range_miles: "316", battery_kwh: "77", size_class: "Mid-size Sedan", segment: "Mainstream" },
  { oem: "Hyundai", model: "Kona Electric", drivetrain: "FWD", range_miles: "261", battery_kwh: "64", size_class: "Subcompact SUV", segment: "Mainstream" },
  // Jaguar
  { oem: "Jaguar", model: "I-PACE", drivetrain: "AWD", range_miles: "246", battery_kwh: "85", size_class: "Mid-size SUV", segment: "Luxury" },
  // Kia
  { oem: "Kia", model: "EV6", drivetrain: "RWD", range_miles: "310", battery_kwh: "77", size_class: "Compact SUV", segment: "Mainstream" },
  { oem: "Kia", model: "EV6", drivetrain: "AWD", range_miles: "282", battery_kwh: "77", size_class: "Compact SUV", segment: "Mainstream" },
  { oem: "Kia", model: "EV9", drivetrain: "RWD", range_miles: "304", battery_kwh: "99.8", size_class: "Mid-size SUV (Three-row)", segment: "Mainstream" },
  { oem: "Kia", model: "EV9", drivetrain: "AWD", range_miles: "280", battery_kwh: "99.8", size_class: "Mid-size SUV (Three-row)", segment: "Mainstream" },
  { oem: "Kia", model: "Niro EV", drivetrain: "FWD", range_miles: "253", battery_kwh: "65", size_class: "Subcompact SUV", segment: "Mainstream" },
  // Lexus
  { oem: "Lexus", model: "RZ", drivetrain: "FWD", range_miles: "266", battery_kwh: "66", size_class: "Compact SUV", segment: "Luxury" },
  { oem: "Lexus", model: "RZ", drivetrain: "AWD", range_miles: "220", battery_kwh: "65", size_class: "Compact SUV", segment: "Luxury" },
  // Lucid
  { oem: "Lucid", model: "Air", drivetrain: "RWD", range_miles: "420", battery_kwh: "92", size_class: "Full-size Sedan", segment: "Luxury" },
  { oem: "Lucid", model: "Air", drivetrain: "AWD", range_miles: "516", battery_kwh: "112", size_class: "Full-size Sedan", segment: "Luxury" },
  // Mercedes-Benz
  { oem: "Mercedes-Benz", model: "EQB", drivetrain: "FWD", range_miles: "250", battery_kwh: "70", size_class: "Compact SUV (Optional Three-row)", segment: "Luxury" },
  { oem: "Mercedes-Benz", model: "EQB", drivetrain: "AWD", range_miles: "230", battery_kwh: "70", size_class: "Compact SUV (Optional Three-row)", segment: "Luxury" },
  { oem: "Mercedes-Benz", model: "EQE Sedan", drivetrain: "RWD", range_miles: "308", battery_kwh: "90", size_class: "Mid-size Sedan", segment: "Luxury" },
  { oem: "Mercedes-Benz", model: "EQE Sedan", drivetrain: "AWD", range_miles: "300", battery_kwh: "90", size_class: "Mid-size Sedan", segment: "Luxury" },
  { oem: "Mercedes-Benz", model: "EQE SUV", drivetrain: "RWD", range_miles: "302", battery_kwh: "90", size_class: "Mid-size SUV", segment: "Luxury" },
  { oem: "Mercedes-Benz", model: "EQE SUV", drivetrain: "AWD", range_miles: "280", battery_kwh: "90", size_class: "Mid-size SUV", segment: "Luxury" },
  { oem: "Mercedes-Benz", model: "EQS Sedan", drivetrain: "RWD", range_miles: "390", battery_kwh: "108", size_class: "Full-size Sedan", segment: "Luxury" },
  { oem: "Mercedes-Benz", model: "EQS Sedan", drivetrain: "AWD", range_miles: "370", battery_kwh: "108", size_class: "Full-size Sedan", segment: "Luxury" },
  { oem: "Mercedes-Benz", model: "EQS SUV", drivetrain: "RWD", range_miles: "339", battery_kwh: "108", size_class: "Full-size SUV (Three-row)", segment: "Luxury" },
  { oem: "Mercedes-Benz", model: "EQS SUV", drivetrain: "AWD", range_miles: "330", battery_kwh: "108", size_class: "Full-size SUV (Three-row)", segment: "Luxury" },
  { oem: "Mercedes-Benz", model: "Maybach EQS SUV", drivetrain: "AWD", range_miles: "302", battery_kwh: "108", size_class: "Full-size SUV (Three-row)", segment: "Luxury" },
  // MINI
  { oem: "MINI", model: "Cooper Electric", drivetrain: "FWD", range_miles: "114", battery_kwh: "33", size_class: "Subcompact Hatchback", segment: "Premium" },
  { oem: "MINI", model: "Countryman Electric", drivetrain: "AWD", range_miles: "245", battery_kwh: "66", size_class: "Subcompact SUV", segment: "Premium" },
  // Nissan
  { oem: "Nissan", model: "Ariya", drivetrain: "FWD", range_miles: "304", battery_kwh: "87", size_class: "Compact SUV", segment: "Mainstream" },
  { oem: "Nissan", model: "Ariya", drivetrain: "AWD", range_miles: "272", battery_kwh: "87", size_class: "Compact SUV", segment: "Mainstream" },
  { oem: "Nissan", model: "Leaf", drivetrain: "FWD", range_miles: "212", battery_kwh: "60", size_class: "Compact Hatchback", segment: "Mainstream" },
  // Polestar
  { oem: "Polestar", model: "2", drivetrain: "RWD", range_miles: "320", battery_kwh: "79", size_class: "Compact Sedan", segment: "Premium" },
  { oem: "Polestar", model: "2", drivetrain: "AWD", range_miles: "276", battery_kwh: "78", size_class: "Compact Sedan", segment: "Premium" },
  { oem: "Polestar", model: "3", drivetrain: "AWD", range_miles: "315", battery_kwh: "107", size_class: "Mid-size SUV", segment: "Premium" },
  // Porsche
  { oem: "Porsche", model: "Taycan", drivetrain: "RWD", range_miles: "300", battery_kwh: "97", size_class: "Full-size Sedan", segment: "Luxury" },
  { oem: "Porsche", model: "Taycan", drivetrain: "AWD", range_miles: "295", battery_kwh: "97", size_class: "Full-size Sedan", segment: "Luxury" },
  { oem: "Porsche", model: "Macan Electric", drivetrain: "AWD", range_miles: "308", battery_kwh: "95", size_class: "Compact SUV", segment: "Luxury" },
  // Rivian
  { oem: "Rivian", model: "R1T", drivetrain: "AWD", range_miles: "420", battery_kwh: "149", size_class: "Full-size Truck", segment: "Premium" },
  { oem: "Rivian", model: "R1S", drivetrain: "AWD", range_miles: "410", battery_kwh: "149", size_class: "Full-size SUV (Three-row)", segment: "Premium" },
  // Rolls-Royce
  { oem: "Rolls-Royce", model: "Spectre", drivetrain: "AWD", range_miles: "264", battery_kwh: "102", size_class: "Full-size Coupe", segment: "Luxury" },
  // Subaru
  { oem: "Subaru", model: "Solterra", drivetrain: "AWD", range_miles: "227", battery_kwh: "71", size_class: "Compact SUV", segment: "Mainstream" },
  // Tesla
  { oem: "Tesla", model: "Model 3", drivetrain: "RWD", range_miles: "363", battery_kwh: "80", size_class: "Mid-size Sedan", segment: "Premium" },
  { oem: "Tesla", model: "Model 3", drivetrain: "AWD", range_miles: "341", battery_kwh: "80", size_class: "Mid-size Sedan", segment: "Premium" },
  { oem: "Tesla", model: "Model Y", drivetrain: "RWD", range_miles: "337", battery_kwh: "80", size_class: "Compact SUV", segment: "Premium" },
  { oem: "Tesla", model: "Model Y", drivetrain: "AWD", range_miles: "310", battery_kwh: "80", size_class: "Compact SUV", segment: "Premium" },
  { oem: "Tesla", model: "Model S", drivetrain: "AWD", range_miles: "405", battery_kwh: "100", size_class: "Full-size Sedan", segment: "Luxury" },
  { oem: "Tesla", model: "Model X", drivetrain: "AWD", range_miles: "348", battery_kwh: "100", size_class: "Mid-size SUV (Optional Three-row)", segment: "Luxury" },
  { oem: "Tesla", model: "Cybertruck", drivetrain: "AWD", range_miles: "340", battery_kwh: "123", size_class: "Full-size Truck", segment: "Premium" },
  { oem: "Tesla", model: "Cybertruck (Cyberbeast)", drivetrain: "AWD", range_miles: "320", battery_kwh: "123", size_class: "Full-size Truck", segment: "Premium" },
  // Toyota
  { oem: "Toyota", model: "bZ4X", drivetrain: "FWD", range_miles: "252", battery_kwh: "64", size_class: "Compact SUV", segment: "Mainstream" },
  { oem: "Toyota", model: "bZ4X", drivetrain: "AWD", range_miles: "228", battery_kwh: "66", size_class: "Compact SUV", segment: "Mainstream" },
  // VinFast
  { oem: "VinFast", model: "VF 8", drivetrain: "AWD", range_miles: "264", battery_kwh: "87", size_class: "Mid-size SUV", segment: "Mainstream" },
  { oem: "VinFast", model: "VF 9", drivetrain: "AWD", range_miles: "330", battery_kwh: "123", size_class: "Mid-size SUV (Three-row)", segment: "Mainstream" },
  // Volkswagen
  { oem: "Volkswagen", model: "ID.4", drivetrain: "RWD", range_miles: "291", battery_kwh: "77", size_class: "Compact SUV", segment: "Mainstream" },
  { oem: "Volkswagen", model: "ID.4", drivetrain: "AWD", range_miles: "263", battery_kwh: "77", size_class: "Compact SUV", segment: "Mainstream" },
  { oem: "Volkswagen", model: "ID. Buzz", drivetrain: "RWD", range_miles: "260", battery_kwh: "77", size_class: "Van", segment: "Mainstream" },
  { oem: "Volkswagen", model: "ID. Buzz", drivetrain: "AWD", range_miles: "250", battery_kwh: "77", size_class: "Van", segment: "Mainstream" },
  // Volvo
  { oem: "Volvo", model: "XC40 Recharge", drivetrain: "RWD", range_miles: "293", battery_kwh: "79", size_class: "Subcompact SUV", segment: "Premium" },
  { oem: "Volvo", model: "XC40 Recharge", drivetrain: "AWD", range_miles: "254", battery_kwh: "75", size_class: "Subcompact SUV", segment: "Premium" },
  { oem: "Volvo", model: "C40 Recharge", drivetrain: "RWD", range_miles: "297", battery_kwh: "79", size_class: "Subcompact SUV", segment: "Premium" },
  { oem: "Volvo", model: "C40 Recharge", drivetrain: "AWD", range_miles: "257", battery_kwh: "75", size_class: "Subcompact SUV", segment: "Premium" },
  { oem: "Volvo", model: "EX30", drivetrain: "RWD", range_miles: "275", battery_kwh: "64", size_class: "Subcompact SUV", segment: "Premium" },
  { oem: "Volvo", model: "EX30", drivetrain: "AWD", range_miles: "265", battery_kwh: "64", size_class: "Subcompact SUV", segment: "Premium" },
  { oem: "Volvo", model: "EX90", drivetrain: "AWD", range_miles: "310", battery_kwh: "107", size_class: "Mid-size SUV (Three-row)", segment: "Luxury" }
];

// Helper function to get vehicle type based on body_style
const getBodyTypeFromString = (bodyStyle: string): string => {
  if (!bodyStyle) return 'other';
  
  const lowercase = bodyStyle.toLowerCase();
  if (lowercase.includes('suv')) return 'suv';
  if (lowercase.includes('sedan')) return 'sedan';
  if (lowercase.includes('hatchback')) return 'hatchback';
  if (lowercase.includes('truck')) return 'truck';
  if (lowercase.includes('van')) return 'van';
  if (lowercase.includes('coupe')) return 'coupe';
  if (lowercase.includes('wagon')) return 'wagon';
  return 'other';
};

// Helper function to get number of seats based on size and body style
const getSeatsFromSize = (size: string, bodyStyle: string): number => {
  if (!size || !bodyStyle) return 5;
  
  const lowerBodyStyle = bodyStyle.toLowerCase();
  const lowerSize = size.toLowerCase();
  
  // Three-row vehicles
  if (lowerBodyStyle.includes('three-row')) return 7;
  
  // By vehicle type
  if (lowerBodyStyle.includes('van')) return 7;
  if (lowerBodyStyle.includes('truck')) return 5;
  if (lowerBodyStyle.includes('coupe')) return 4;
  
  // By size
  if (lowerSize.includes('full')) return 6;
  if (lowerSize.includes('mid')) return 5;
  if (lowerSize.includes('compact')) return 5;
  if (lowerSize.includes('subcompact')) return 4;
  
  return 5;
};

// Process the raw data and organize by manufacturer
evData.forEach(car => {
  // Handle nullable properties safely with defaults
  const oem = car.oem || '';
  const model = car.model || '';
  const drivetrain = car.drivetrain || 'RWD';
  const segment = car.segment || 'Mainstream';
  
  // For range, if it's "TBD" or "N/A", use 250 as default value
  const rangeStr = car.range_miles || '';
  const rangeMiles = rangeStr === "TBD" || rangeStr === "N/A" 
    ? 250 
    : parseInt(rangeStr) || 250;
  
  // Clean the battery value and extract just the number
  let batterySize = '';
  
  if (car.battery_size) {
    batterySize = car.battery_size;
  } else if ('battery_kwh' in car && (car as any).battery_kwh) {
    // Fallback for old format
    batterySize = (car as any).battery_kwh + ' kWh';
  } else {
    batterySize = '80 kWh'; // Default value
  }
  
  const batteryStr = batterySize.toString().replace(/[~+\s]?kWh/g, '').trim();
  const batteryKwh = parseFloat(batteryStr) || 80;
  
  // Skip cars with undefined range (TBD or N/A)
  if (isNaN(rangeMiles)) return;
  
  const fullName = `${oem} ${model}${drivetrain !== "RWD" ? ` ${drivetrain}` : ""}`;
  
  // Get body_style and size, with fallbacks to size_class if needed
  let bodyStyle = '';
  let sizeClass = '';
  let vehicleType = 'other';
  let seats = 5;
  
  if (car.body_style && car.size) {
    // New format
    bodyStyle = car.body_style;
    sizeClass = car.size;
    vehicleType = getBodyTypeFromString(bodyStyle);
    seats = getSeatsFromSize(sizeClass, bodyStyle);
  } else if ('size_class' in car && (car as any).size_class) {
    // Old format
    const sizeClassStr = (car as any).size_class || '';
    vehicleType = getVehicleType(sizeClassStr);
    bodyStyle = getBodyStyle(sizeClassStr);
    sizeClass = getSizeClass(sizeClassStr);
    seats = getSeats(sizeClassStr);
  } else {
    // Defaults if nothing available
    vehicleType = 'other';
    bodyStyle = 'SUV';
    sizeClass = 'Mid-size';
    seats = 5;
  }
  
  const pricePerDay = calculatePrice(segment, rangeMiles);
  const isLuxury = segment === "Luxury";
  const isPremium = segment === "Premium" || segment === "Luxury";
  
  // Determine car category based on segment
  let type = "mainstream";
  if (car.segment === "Luxury") type = "luxury";
  else if (car.segment === "Premium") type = "premium";
  
  const features = generateFeatures(car.segment, car.model, car.oem);
  
  const insertCar: InsertCar = {
    name: fullName,
    type,
    image: getCarImage(car.oem, car.model),
    images: [
      getCarImage(car.oem, car.model),
      getCarImage(car.oem, car.model),
      getCarImage(car.oem, car.model)
    ],
    seats,
    bags: Math.floor(seats / 2) + 1,
    doors: vehicleType === 'coupe' ? 2 : 4,
    range: rangeMiles,
    batteryCapacity: batteryKwh,
    chargingTime: Math.floor(batteryKwh / 2),
    description: `The ${fullName} is a ${car.segment.toLowerCase()} electric ${vehicleType} with a range of ${rangeMiles} miles on a single charge. Featuring a ${batteryKwh} kWh battery and ${car.drivetrain} drivetrain, it offers excellent efficiency and performance.`,
    pricePerDay,
    features,
    rating: 4 + Math.random(),
    reviewCount: Math.floor(Math.random() * 100) + 5,
    availableForDaily: true,
    availableForWeekly: true,
    availableForMonthly: true,
    isLuxury,
    isPopular: false,
    // Adding new parameters
    oem: car.oem,
    model: car.model,
    drivetrain: car.drivetrain,
    rangeMiles: car.range_miles,
    batterySizeKwh: car.battery_size,
    size: sizeClass,
    bodyType: bodyStyle,
    segment: car.segment
  };
  
  // Add to manufacturer group
  if (!carsByManufacturer[car.oem]) {
    carsByManufacturer[car.oem] = [];
  }
  carsByManufacturer[car.oem].push(insertCar);
});

// Create a flat array of all cars
export const carsData: InsertCar[] = Object.values(carsByManufacturer).flat();