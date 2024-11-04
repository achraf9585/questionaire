"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type CooperationPartners = {
  [key: string]: {
    ksa: boolean;
    gulfStates: boolean;
    nonGulfStates: boolean;
  };
  businessEnterprise: {
    ksa: boolean;
    gulfStates: boolean;
    nonGulfStates: boolean;
  };
  consultants: {
    ksa: boolean;
    gulfStates: boolean;
    nonGulfStates: boolean;
  };
  suppliers: {
    ksa: boolean;
    gulfStates: boolean;
    nonGulfStates: boolean;
  };
  // ... other properties ...
  //  nonProfitOrganizations: {
  // ... other properties ...
  //};
};

interface EmploymentData {
  [key: string]: {
    male: {
      phd: number;
      masters: number;
      bachelors: number;
      lessThanBachelors: number;
    };
    female: {
      phd: number;
      masters: number;
      bachelors: number;
      lessThanBachelors: number;
    };
  };
}

type Grp = {
  businessEnterprise: {
    ksa: boolean;
    gulfStates: boolean;
    nonGulfStates: boolean;
  };
  consultants: {
    ksa: boolean;
    gulfStates: boolean;
    nonGulfStates: boolean;
  };
  //... more properties
};

export default function FormInnovation() {
  type Category = "saudi" | "nonSaudi";
  const [step, setStep] = useState(1);
  const totalSteps = 10;

  const [formData, setFormData] = useState({
    enterpriseName: "",
    registrationNumber: "",
    address: {
      street: "",
      city: "",
      region: "",
      postCode: "",
    },
    website: "",
    email: "",
    contactNumber: "",
    establishmentYear: "",
    businessActivity: "",
    isicCode: "",
    partOfGroup: "",
    employmentData: {
      saudi: {
        male: {
          phd: 0,
          masters: 0,
          bachelors: 0,
          lessThanBachelors: 0,
        },
        female: {
          phd: 0,
          masters: 0,
          bachelors: 0,
          lessThanBachelors: 0,
        },
      },
      nonSaudi: {
        male: {
          phd: 0,
          masters: 0,
          bachelors: 0,
          lessThanBachelors: 0,
        },
        female: {
          phd: 0,
          masters: 0,
          bachelors: 0,
          lessThanBachelors: 0,
        },
      },
    },
    turnover: {
      firstYear: "",
      lastYear: "",
    },
    turnoverPercentage: {
      ksa: 0,
      gulfStates: 0,
      nonGulfStates: 0,
    },
    strategies: {
      improvingExisting: "",
      introducingNew: "",
      lowPrice: "",
      highQuality: "",
      broadRange: "",
      keyProducts: "",
      satisfyingEstablished: "",
      reachingNewCustomers: "",
      standardized: "",
      customerSpecific: "",
    },
    intellectualProperty: {
      applyPatent: false,
      patentGranted: false,
      registerDesign: false,
      registerTrademark: false,
      registerUtilityModels: false,
      claimCopyright: false,
      useTradeSecrets: false,
    },
    iprActivities: {
      licenseOut: false,
      sell: false,
      exchange: false,
    },
    productInnovation: {
      newGoods: false,
      newServices: false,
    },
    innovationNovelty: {
      newToMarket: false,
      newToEnterprise: false,
    },
    turnoverPercentageInnovation: {
      newToMarket: 0,
      newToEnterprise: 0,
      unchanged: 0,
    },
    innovationDevelopment: {
      byEnterprise: false,
      withOthers: false,
      byAdapting: false,
      byOthers: false,
    },
    businessProcessInnovation: {
      production: false,
      logistics: false,
      informationProcessing: false,
      accounting: false,
      businessPractices: false,
      workOrganization: false,
      marketing: false,
    },
    innovationActivities: {
      inHouseRD: false,
      externalRD: false,
      ongoing: false,
      abandoned: false,
      completed: false,
    },
    innovationExpenditures: {
      intramuralRD: 0,
      extramuralRD: 0,
      otherInnovation: 0,
      ownPersonnel: 0,
      services: 0,
      capitalGoods: 0,
      other: 0,
    },
    innovationHampering: "",
    cooperation: {
      rd: false,
      otherInnovation: false,
      otherBusiness: false,
    },
    cooperationPartners: {
      businessEnterprise: {
        ksa: false,
        gulfStates: false,
        nonGulfStates: false,
      },
      consultants: {
        ksa: false,
        gulfStates: false,
        nonGulfStates: false,
      },
      suppliers: {
        ksa: false,
        gulfStates: false,
        nonGulfStates: false,
      },
      clients: {
        ksa: false,
        gulfStates: false,
        nonGulfStates: false,
      },
      competitors: {
        ksa: false,
        gulfStates: false,
        nonGulfStates: false,
      },
      otherEnterprises: {
        ksa: false,
        gulfStates: false,
        nonGulfStates: false,
      },
      enterpriseGroup: {
        ksa: false,
        gulfStates: false,
        nonGulfStates: false,
      },
      universities: {
        ksa: false,
        gulfStates: false,
        nonGulfStates: false,
      },
      governmentInstitutes: {
        ksa: false,
        gulfStates: false,
        nonGulfStates: false,
      },
      publicSectorClients: {
        ksa: false,
        gulfStates: false,
        nonGulfStates: false,
      },
      nonProfitOrganizations: {
        ksa: false,
        gulfStates: false,
        nonGulfStates: false,
      },
    },
    funding: {
      equity: {
        obtained: "",
        usedForInnovation: false,
      },
      debt: {
        obtained: "",
        usedForInnovation: false,
      },
    },
    publicFunding: {
      local: {
        obtained: false,
        usedForInnovation: false,
      },
      national: {
        obtained: false,
        usedForInnovation: false,
      },
      otherAgencies: {
        obtained: false,
        usedForInnovation: false,
      },
      foreign: {
        obtained: false,
        usedForInnovation: false,
      },
    },
    taxIncentives: {
      rdInnovation: false,
      otherActivities: false,
    },
    legislationEffect: {
      productSafety: "",
      environmental: "",
      intellectualProperty: "",
      tax: "",
      employment: "",
      smeSupport: "",
    },
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  /*
  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };
*/
  const handleNestedChange = (
    category: string,
    subCategory: string,
    value: string | number | boolean
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      [category]: {
        ...(prevData[category as keyof typeof prevData] as object),
        [subCategory]: value,
      },
    }));
  };

  const nextStep = () =>
    setStep((prevStep) => Math.min(prevStep + 1, totalSteps));
  const prevStep = () => setStep((prevStep) => Math.max(prevStep - 1, 1));

  return (
    <div className="container mx-auto py-10">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>Innovation in KSA's Manufacturing Sector</CardTitle>
          <CardDescription>
            Please fill out this questionnaire to help us measure innovation in
            your enterprise.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Progress value={(step / totalSteps) * 100} className="mb-4" />
          <form>
            {step === 1 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">
                  1. General Information about the Enterprise
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="enterpriseName">
                      Name of the enterprise
                    </Label>
                    <Input
                      id="enterpriseName"
                      name="enterpriseName"
                      value={formData.enterpriseName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="registrationNumber">
                      Business Registration Number
                    </Label>
                    <Input
                      id="registrationNumber"
                      name="registrationNumber"
                      value={formData.registrationNumber}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="street">Address</Label>
                  <Input
                    id="street"
                    name="street"
                    placeholder="Street Name and Number"
                    value={formData.address.street}
                    onChange={(e) =>
                      handleNestedChange("address", "street", e.target.value)
                    }
                    required
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      id="city"
                      name="city"
                      placeholder="City/Town"
                      value={formData.address.city}
                      onChange={(e) =>
                        handleNestedChange("address", "city", e.target.value)
                      }
                      required
                    />
                    <Input
                      id="region"
                      name="region"
                      placeholder="Region/Province"
                      value={formData.address.region}
                      onChange={(e) =>
                        handleNestedChange("address", "region", e.target.value)
                      }
                      required
                    />
                  </div>
                  <Input
                    id="postCode"
                    name="postCode"
                    placeholder="Post Code"
                    value={formData.address.postCode}
                    onChange={(e) =>
                      handleNestedChange("address", "postCode", e.target.value)
                    }
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input
                      id="website"
                      name="website"
                      type="url"
                      value={formData.website}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contactNumber">Contact number</Label>
                    <Input
                      id="contactNumber"
                      name="contactNumber"
                      type="tel"
                      value={formData.contactNumber}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="establishmentYear">
                      Year in which your enterprise was established
                    </Label>
                    <Input
                      id="establishmentYear"
                      name="establishmentYear"
                      type="number"
                      min="1900"
                      max={new Date().getFullYear()}
                      value={formData.establishmentYear}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="businessActivity">
                    What is the main business activity of your enterprise?
                  </Label>
                  <Textarea
                    id="businessActivity"
                    name="businessActivity"
                    value={formData.businessActivity}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="isicCode">ISIC Rev. 4 Code</Label>
                  <Input
                    id="isicCode"
                    name="isicCode"
                    value={formData.isicCode}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">
                  1.2 Organizational Structure
                </h2>
                <div className="space-y-2">
                  <Label>
                    In 20XX [last year of the reference period] was your
                    enterprise part of?
                  </Label>
                  <RadioGroup
                    name="partOfGroup"
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, partOfGroup: value }))
                    }
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="domestic" id="domestic" />
                      <Label htmlFor="domestic">
                        An enterprise group with the head office located in KSA?
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="foreign" id="foreign" />
                      <Label htmlFor="foreign">
                        An enterprise group with the head office located outside
                        the KSA?
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="none" id="none" />
                      <Label htmlFor="none">Not part of any group</Label>
                    </div>
                  </RadioGroup>
                </div>
                {formData.partOfGroup === "foreign" && (
                  <div className="space-y-2">
                    <Label htmlFor="headOfficeCountry">
                      In which country is the head office located?
                    </Label>
                    <Input
                      id="headOfficeCountry"
                      name="headOfficeCountry"
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                )}
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">1.3 Employment Data</h2>
                <p>
                  What was the average number of employed persons in your
                  enterprise by education level, sex and nationality in 20XX
                  [last year of the reference period]?
                </p>
                {["saudi", "nonSaudi"].map((category) => (
                  <div key={category} className="space-y-4">
                    <h3 className="text-lg font-semibold capitalize">
                      {category}
                    </h3>
                    {["male", "female"].map((gender) => (
                      <div key={`${category}-${gender}`} className="space-y-2">
                        <h4 className="text-md font-medium capitalize">
                          {gender}
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                          {[
                            "phd",
                            "masters",
                            "bachelors",
                            "lessThanBachelors",
                          ].map((level) => (
                            <div
                              key={`${category}-${gender}-${level}`}
                              className="space-y-2"
                            >
                              <Label htmlFor={`${category}-${gender}-${level}`}>
                                {level === "lessThanBachelors"
                                  ? "Less than Bachelor's degree"
                                  : `${
                                      level.charAt(0).toUpperCase() +
                                      level.slice(1)
                                    }`}
                              </Label>
                              <Input
                                id={`${category}-${gender}-${level}`}
                                name={`${category}-${gender}-${level}`}
                                type="number"
                                min="0"
                                value={
                                  (formData.employmentData as any)[category]?.[
                                    gender
                                  ]?.[level] ?? 0
                                }
                                onChange={(
                                  e: React.ChangeEvent<HTMLInputElement>
                                ) =>
                                  handleNestedChange(
                                    `employmentData.${category}.${gender}`,
                                    level,
                                    parseInt(e.target.value, 10) || 0
                                  )
                                }
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}

            {step === 4 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">
                  1.4 Enterprise Turnover
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="turnoverFirstYear">
                      Total turnover in 20XX [first year of the reference
                      period]
                    </Label>
                    <Input
                      id="turnoverFirstYear"
                      name="turnoverFirstYear"
                      type="number"
                      min="0"
                      value={formData.turnover.firstYear}
                      onChange={(e) =>
                        handleNestedChange(
                          "turnover",
                          "firstYear",
                          e.target.value
                        )
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="turnoverLastYear">
                      Total turnover in 20XX [last year of the reference period]
                    </Label>
                    <Input
                      id="turnoverLastYear"
                      name="turnoverLastYear"
                      type="number"
                      min="0"
                      value={formData.turnover.lastYear}
                      onChange={(e) =>
                        handleNestedChange(
                          "turnover",
                          "lastYear",
                          e.target.value
                        )
                      }
                      required
                    />
                  </div>
                </div>
                <h3 className="text-lg font-semibold">
                  1.5 Geographic Distribution of Sales
                </h3>
                <p>
                  Approximately, what was the percentage of your firm's turnover
                  in 20XX from:
                </p>
                <div className="space-y-2">
                  <Label htmlFor="turnoverKSA">
                    Customers located within KSA (%)
                  </Label>
                  <Input
                    id="turnoverKSA"
                    name="turnoverKSA"
                    type="number"
                    min="0"
                    max="100"
                    value={formData.turnoverPercentage.ksa}
                    onChange={(e) =>
                      handleNestedChange(
                        "turnoverPercentage",
                        "ksa",
                        parseInt(e.target.value) || 0
                      )
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="turnoverGulf">
                    Customers located in other Gulf States (%)
                  </Label>
                  <Input
                    id="turnoverGulf"
                    name="turnoverGulf"
                    type="number"
                    min="0"
                    max="100"
                    value={formData.turnoverPercentage.gulfStates}
                    onChange={(e) =>
                      handleNestedChange(
                        "turnoverPercentage",
                        "gulfStates",
                        parseInt(e.target.value) || 0
                      )
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="turnoverNonGulf">
                    Customers located in non-Gulf States (%)
                  </Label>
                  <Input
                    id="turnoverNonGulf"
                    name="turnoverNonGulf"
                    type="number"
                    min="0"
                    max="100"
                    value={formData.turnoverPercentage.nonGulfStates}
                    onChange={(e) =>
                      handleNestedChange(
                        "turnoverPercentage",
                        "nonGulfStates",
                        parseInt(e.target.value) || 0
                      )
                    }
                    required
                  />
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">
                  2. Strategies and Knowledge Flows
                </h2>
                <p>
                  During the period from 20XX to 20XX [first and last year of
                  the reference period], how important were the following
                  strategies for your business?
                </p>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Strategy</TableHead>
                      <TableHead>Degree of Importance</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        key: "improvingExisting",
                        label:
                          "Focus on improving your existing goods or services",
                      },
                      {
                        key: "introducingNew",
                        label: "Focus on introducing new goods or services",
                      },
                      {
                        key: "lowPrice",
                        label: "Focus on low-price (price leadership)",
                      },
                      {
                        key: "highQuality",
                        label: "Focus on high-quality (quality leadership)",
                      },
                      {
                        key: "broadRange",
                        label: "Focus on a broad range of goods or services",
                      },
                      {
                        key: "keyProducts",
                        label:
                          "Focus on one or a small number of key goods or services",
                      },
                      {
                        key: "satisfyingEstablished",
                        label: "Focus on satisfying established customers",
                      },
                      {
                        key: "reachingNewCustomers",
                        label: "Focus on reaching out to new customers",
                      },
                      {
                        key: "standardized",
                        label: "Focus on standardized goods or services",
                      },
                      {
                        key: "customerSpecific",
                        label: "Focus on customer-specific solutions",
                      },
                    ].map((strategy) => (
                      <TableRow key={strategy.key}>
                        <TableCell>{strategy.label}</TableCell>
                        <TableCell>
                          <Select
                            onValueChange={(value) =>
                              handleNestedChange(
                                "strategies",
                                strategy.key,
                                value
                              )
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select importance" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="high">High</SelectItem>
                              <SelectItem value="medium">Medium</SelectItem>
                              <SelectItem value="low">Low</SelectItem>
                              <SelectItem value="not-important">
                                Not Important
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}

            {step === 6 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">
                  2.2 Use of Intellectual Property Rights (IPRs)
                </h2>
                <p>
                  During the period from 20XX to 20XX [first and last year of
                  the reference period], did your enterprise:
                </p>
                <div className="space-y-2">
                  {[
                    { key: "applyPatent", label: "Apply for a patent" },
                    { key: "patentGranted", label: "If so, was it granted?" },
                    {
                      key: "registerDesign",
                      label: "Register an industrial design right",
                    },
                    { key: "registerTrademark", label: "Register a trademark" },
                    {
                      key: "registerUtilityModels",
                      label: "Register utility models",
                    },
                    { key: "claimCopyright", label: "Claim a copyright" },
                    { key: "useTradeSecrets", label: "Use trade secrets" },
                  ].map((item) => (
                    <div key={item.key} className="flex items-center space-x-2">
                      <Checkbox
                        id={item.key}
                        checked={
                          formData.intellectualProperty[
                            item.key as keyof typeof formData.intellectualProperty
                          ]
                        }
                        onCheckedChange={(checked) =>
                          handleNestedChange(
                            "intellectualProperty",
                            item.key,
                            checked
                          )
                        }
                      />
                      <Label htmlFor={item.key}>{item.label}</Label>
                    </div>
                  ))}
                </div>
                <h3 className="text-lg font-semibold">2.3 IPR Activities</h3>
                <p>
                  During the period from 20XX to 20XX [first and last year of
                  the reference period], did your enterprise:
                </p>
                <div className="space-y-2">
                  {[
                    {
                      key: "licenseOut",
                      label:
                        "License out its own intellectual property rights (IPRs) to others",
                    },
                    {
                      key: "sell",
                      label:
                        "Sell its own IPRs (or assign IP rights) to others",
                    },
                    {
                      key: "exchange",
                      label: "Exchange IPRs (pooling, cross-licensing, etc.)",
                    },
                  ].map((item) => (
                    <div key={item.key} className="flex items-center space-x-2">
                      <Checkbox
                        id={item.key}
                        checked={
                          formData.iprActivities[
                            item.key as keyof typeof formData.iprActivities
                          ]
                        }
                        onCheckedChange={(checked) =>
                          handleNestedChange("iprActivities", item.key, checked)
                        }
                      />
                      <Label htmlFor={item.key}>{item.label}</Label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {step === 7 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">3. Product Innovation</h2>
                <p>
                  During the period from 20XX to 20XX [first and last year of
                  the reference period], did your enterprise introduce any:
                </p>
                <div className="space-y-2">
                  {[
                    { key: "newGoods", label: "New or improved goods" },
                    { key: "newServices", label: "New or improved services" },
                  ].map((item) => (
                    <div key={item.key} className="flex items-center space-x-2">
                      <Checkbox
                        id={item.key}
                        checked={
                          formData.productInnovation[
                            item.key as keyof typeof formData.productInnovation
                          ]
                        }
                        onCheckedChange={(checked) =>
                          handleNestedChange(
                            "productInnovation",
                            item.key,
                            checked
                          )
                        }
                      />
                      <Label htmlFor={item.key}>{item.label}</Label>
                    </div>
                  ))}
                </div>
                <h3 className="text-lg font-semibold">3.2 Degree of Novelty</h3>
                <p>
                  During the period from 20XX to 20XX [first and last year of
                  the reference period], did your enterprise introduce any new
                  or improved products (goods or services) that were:
                </p>
                <div className="space-y-2">
                  {[
                    {
                      key: "newToMarket",
                      label:
                        "Not previously offered by any of your competitors (new to the market)",
                    },
                    {
                      key: "newToEnterprise",
                      label:
                        "Identical or very similar to products already offered by your competitors (new to the enterprise only)",
                    },
                  ].map((item) => (
                    <div key={item.key} className="flex items-center space-x-2">
                      <Checkbox
                        id={item.key}
                        checked={
                          formData.innovationNovelty[
                            item.key as keyof typeof formData.innovationNovelty
                          ]
                        }
                        onCheckedChange={(checked) =>
                          handleNestedChange(
                            "innovationNovelty",
                            item.key,
                            checked
                          )
                        }
                      />
                      <Label htmlFor={item.key}>{item.label}</Label>
                    </div>
                  ))}
                </div>
                <h3 className="text-lg font-semibold">
                  3.3 Share of Sales from Product Innovations
                </h3>
                <p>
                  Using the definitions above, please estimate the percentage of
                  your enterprise's total turnover in 20XX [last year of
                  reference period] from:
                </p>
                <div className="space-y-2">
                  {[
                    {
                      key: "newToMarket",
                      label:
                        "Products introduced during the years 20XX to 20XX that were not previously offered by any of your competitors",
                    },
                    {
                      key: "newToEnterprise",
                      label:
                        "Products introduced during the years 20XX to 20XX that were identical or very similar to products already offered by your competitors",
                    },
                    {
                      key: "unchanged",
                      label:
                        "Products that were unchanged or only marginally modified during the years 20XX to 20XX (include the resale of new products purchased from other enterprises)",
                    },
                  ].map((item) => (
                    <div key={item.key} className="space-y-2">
                      <Label htmlFor={`turnover-${item.key}`}>
                        {item.label}
                      </Label>
                      <Input
                        id={`turnover-${item.key}`}
                        name={`turnover-${item.key}`}
                        type="number"
                        min="0"
                        max="100"
                        value={
                          formData.turnoverPercentageInnovation[
                            item.key as keyof typeof formData.turnoverPercentageInnovation
                          ]
                        }
                        onChange={(e) =>
                          handleNestedChange(
                            "turnoverPercentageInnovation",
                            item.key,
                            parseInt(e.target.value) || 0
                          )
                        }
                        required
                      />
                    </div>
                  ))}
                </div>
                <h3 className="text-lg font-semibold">
                  3.4 Who Developed Product Innovations
                </h3>
                <div className="space-y-2">
                  {[
                    { key: "byEnterprise", label: "Your enterprise by itself" },
                    {
                      key: "withOthers",
                      label:
                        "Your enterprise together with other enterprises or organizations",
                    },
                    {
                      key: "byAdapting",
                      label:
                        "Your enterprise by adapting or modifying products originally developed by other enterprises or organizations",
                    },
                    {
                      key: "byOthers",
                      label: "Other enterprises or organizations",
                    },
                  ].map((item) => (
                    <div key={item.key} className="flex items-center space-x-2">
                      <Checkbox
                        id={item.key}
                        checked={
                          formData.innovationDevelopment[
                            item.key as keyof typeof formData.innovationDevelopment
                          ]
                        }
                        onCheckedChange={(checked) =>
                          handleNestedChange(
                            "innovationDevelopment",
                            item.key,
                            checked
                          )
                        }
                      />
                      <Label htmlFor={item.key}>{item.label}</Label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {step === 8 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">
                  4. Business Process Innovation
                </h2>
                <p>
                  During the period from 20XX to 20XX [first and last year of
                  the reference period], did your enterprise introduce any of
                  the following types of new or improved processes that differ
                  significantly from your previous processes?
                </p>
                <div className="space-y-2">
                  {[
                    {
                      key: "production",
                      label:
                        "Methods for producing or developing goods or providing services",
                    },
                    {
                      key: "logistics",
                      label: "Logistics, delivery or distribution methods",
                    },
                    {
                      key: "informationProcessing",
                      label:
                        "Methods for information processing or communication",
                    },
                    {
                      key: "accounting",
                      label:
                        "Methods for accounting or other administrative operations",
                    },
                    {
                      key: "businessPractices",
                      label:
                        "Business practices for organising procedures or external relations",
                    },
                    {
                      key: "workOrganization",
                      label:
                        "Methods of organising work responsibility, decision making or human resource management",
                    },
                    {
                      key: "marketing",
                      label:
                        "Marketing methods for promotion, packaging, pricing, product placement or after sales services",
                    },
                  ].map((item) => (
                    <div key={item.key} className="flex items-center space-x-2">
                      <Checkbox
                        id={item.key}
                        checked={
                          formData.businessProcessInnovation[
                            item.key as keyof typeof formData.businessProcessInnovation
                          ]
                        }
                        onCheckedChange={(checked) =>
                          handleNestedChange(
                            "businessProcessInnovation",
                            item.key,
                            checked
                          )
                        }
                      />
                      <Label htmlFor={item.key}>{item.label}</Label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {step === 9 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">
                  5. Innovation Activities
                </h2>
                <p>
                  During the period from 20XX to 20XX [first and last year of
                  the reference period], did your enterprise have any of the
                  following types of innovation activities?
                </p>
                <div className="space-y-2">
                  {[
                    { key: "inHouseRD", label: "In-house R&D" },
                    { key: "externalRD", label: "External R&D" },
                    {
                      key: "ongoing",
                      label: "Ongoing innovation activities at the end of 20XX",
                    },
                    {
                      key: "abandoned",
                      label: "Abandoned or suspended innovation activities",
                    },
                    {
                      key: "completed",
                      label:
                        "Completed innovation activities not leading to the introduction of an innovation in your enterprise",
                    },
                  ].map((item) => (
                    <div key={item.key} className="flex items-center space-x-2">
                      <Checkbox
                        id={item.key}
                        checked={
                          formData.innovationActivities[
                            item.key as keyof typeof formData.innovationActivities
                          ]
                        }
                        onCheckedChange={(checked) =>
                          handleNestedChange(
                            "innovationActivities",
                            item.key,
                            checked
                          )
                        }
                      />
                      <Label htmlFor={item.key}>{item.label}</Label>
                    </div>
                  ))}
                </div>
                <h2 className="text-xl font-semibold">
                  6. Innovation Expenditure
                </h2>
                <p>
                  How much did your enterprise spend on innovation and research
                  and development (R&D) in 20XX? [last year of the reference
                  period]
                </p>
                <div className="space-y-2">
                  {[
                    {
                      key: "intramuralRD",
                      label:
                        "Intramural R&D (include personnel cost, materials and other supplies and purchase of capital goods for R&D activities)",
                    },
                    {
                      key: "extramuralRD",
                      label:
                        "Extramural R&D (purchase of R&D services from other parties)",
                    },
                    {
                      key: "otherInnovation",
                      label:
                        "All other innovation expenditures (excluding R&D)",
                    },
                    {
                      key: "ownPersonnel",
                      label: "Own personnel working on innovation",
                    },
                    {
                      key: "services",
                      label:
                        "Services, materials, supplies purchased from others for innovation",
                    },
                    {
                      key: "capitalGoods",
                      label:
                        "Capital goods for innovation (acquisition of machinery, equipment, software, IPRs, buildings etc.)",
                    },
                    {
                      key: "other",
                      label: "Other expenditures for innovation",
                    },
                  ].map((item) => (
                    <div key={item.key} className="space-y-2">
                      <Label htmlFor={`expenditure-${item.key}`}>
                        {item.label}
                      </Label>
                      <Input
                        id={`expenditure-${item.key}`}
                        name={`expenditure-${item.key}`}
                        type="number"
                        min="0"
                        value={
                          formData.innovationExpenditures[
                            item.key as keyof typeof formData.innovationExpenditures
                          ]
                        }
                        onChange={(e) =>
                          handleNestedChange(
                            "innovationExpenditures",
                            item.key,
                            parseInt(e.target.value) || 0
                          )
                        }
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {step === 10 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">
                  7. Factors Hampering Innovation Activities
                </h2>
                <p>
                  Which of the following best describes why your enterprise did
                  not have more innovation activities during the period 20XX to
                  20XX? [first and last year of the reference period]
                </p>
                <RadioGroup
                  name="innovationHampering"
                  onValueChange={(value) =>
                    setFormData((prev) => ({
                      ...prev,
                      innovationHampering: value,
                    }))
                  }
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="lackOfResources"
                      id="lackOfResources"
                    />
                    <Label htmlFor="lackOfResources">
                      A lack of resources prevented us from having more
                      innovation activities. (e.g. lack of finance, qualified
                      personnel, material)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="otherReasons" id="otherReasons" />
                    <Label htmlFor="otherReasons">
                      We decided not to have more innovation activities due to
                      other reasons than a lack of resources (e.g. strategic
                      reasons; not the right time to innovate; other priorities;
                      risks too high; low expected returns)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="noNeed" id="noNeed" />
                    <Label htmlFor="noNeed">
                      We had no further innovation activities because there was
                      no need
                    </Label>
                  </div>
                </RadioGroup>
                <h2 className="text-xl font-semibold">
                  8. Cooperation for Product and/or Process Innovation
                </h2>
                <p>
                  During the period from 20XX to 20XX [first and last year of
                  the reference period], did your enterprise co-operate with
                  other enterprises or organizations?
                </p>
                <div className="space-y-2">
                  {[
                    { key: "rd", label: "On R&D" },
                    {
                      key: "otherInnovation",
                      label: "On other innovation activities (excluding R&D)",
                    },
                    {
                      key: "otherBusiness",
                      label: "On any other business activities",
                    },
                  ].map((item) => (
                    <div key={item.key} className="flex items-center space-x-2">
                      <Checkbox
                        id={`cooperation-${item.key}`}
                        checked={
                          formData.cooperation[
                            item.key as keyof typeof formData.cooperation
                          ]
                        }
                        onCheckedChange={(checked) =>
                          handleNestedChange("cooperation", item.key, checked)
                        }
                      />
                      <Label htmlFor={`cooperation-${item.key}`}>
                        {item.label}
                      </Label>
                    </div>
                  ))}
                </div>
                <h3 className="text-lg font-semibold">
                  8.2 Type of Innovation Co-operation Partner by Location
                </h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Type of co-operation partner</TableHead>
                      <TableHead>KSA</TableHead>
                      <TableHead>Gulf States</TableHead>
                      <TableHead>Non-Gulf States</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        key: "businessEnterprise",
                        label:
                          "Business enterprises outside your enterprise group",
                      },
                      {
                        key: "consultants",
                        label:
                          "Consultants, commercial labs, or private research institutes",
                      },
                      {
                        key: "suppliers",
                        label:
                          "Suppliers of equipment, materials, components or software",
                      },
                      {
                        key: "clients",
                        label: "Enterprises that are your clients or customers",
                      },
                      {
                        key: "competitors",
                        label: "Enterprises that are your competitors",
                      },
                      { key: "otherEnterprises", label: "Other enterprises" },
                      {
                        key: "enterpriseGroup",
                        label: "Enterprises within your enterprise group",
                      },
                      {
                        key: "universities",
                        label:
                          "Universities or other higher education institutions",
                      },
                      {
                        key: "governmentInstitutes",
                        label: "Government or public research institutes",
                      },
                      {
                        key: "publicSectorClients",
                        label: "Clients or customers from the public sector",
                      },
                      {
                        key: "nonProfitOrganizations",
                        label: "Non-profit organizations",
                      },
                    ].map((partner) => (
                      <TableRow key={partner.key}>
                        <TableCell>{partner.label}</TableCell>
                        {["ksa", "gulfStates", "nonGulfStates"].map(
                          (location) => (
                            <TableCell key={`${partner.key}-${location}`}>
                              <Checkbox
                                checked={
                                  (formData.cooperationPartners as any)[
                                    partner.key as keyof CooperationPartners
                                  ].ksa
                                }
                                onCheckedChange={(checked) => {
                                  setFormData((prevData) => {
                                    const key = partner.key as string;
                                    return {
                                      ...prevData,
                                      cooperationPartners: {
                                        ...prevData.cooperationPartners,
                                        [key]: {
                                          ...(
                                            prevData.cooperationPartners as any
                                          )[key],
                                          ksa: checked,
                                        },
                                      },
                                    };
                                  });
                                }}
                              />
                            </TableCell>
                          )
                        )}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={prevStep} disabled={step === 1}>
            Previous
          </Button>
          <Button onClick={nextStep} disabled={step === totalSteps}>
            {step === totalSteps ? "Submit" : "Next"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
