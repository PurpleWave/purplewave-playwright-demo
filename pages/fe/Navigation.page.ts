
import { Page, Locator } from 'playwright';
import { HeaderPage } from './Header.page';

/**
 * NavigationPage class for handling navigation-specific actions.
 * Extends HeaderPage to reuse header-related locators and actions.
 */
export class NavigationPage extends HeaderPage {
    // NOTE: Locators for main menu links are inherited from HeaderPage

    // Locators for equipment menu links 

    // Ag Equipment
    public agElectronicsLink: Locator;
    public agTractorLink: Locator;
    public applicatorsLink: Locator;
    public grainOrFertilizerHandlingLink: Locator;
    public harvestersLink: Locator;
    public hayEquipmentLink: Locator;
    public irrigationEquipmentLink: Locator;
    public livestockEquipmentLink: Locator;
    public mowersAndOtherAgEquipmentLink: Locator;
    public plantersAndSeedersLink: Locator;
    public tillageEquipmentLink: Locator;

    // Construction Equipment
    public aerialLiftsLink: Locator;
    public asphaltAndPavingEquipmentLink: Locator;
    public attachmentsAndPartsLink: Locator;
    public backhoesAndIndustrialTractorsLink: Locator;
    public boringAndTrenchingLink: Locator;
    public broomsAndSweepersLink: Locator;
    public concreteEquipmentLink: Locator;
    public cranesLink: Locator;
    public crawlersLink: Locator;
    public drillsAndDrillingRigsLink: Locator;
    public excavatorsLink: Locator;
    public gradersLink: Locator;
    public miningEquipmentLink: Locator;
    public offRoadHaulTrucksLink: Locator;
    public quarryAndAggregateLink: Locator;
    public rollersAndCompactionLink: Locator;
    public roughTerrainForkliftsLink: Locator;
    public scrapersLink: Locator;
    public skidSteerLoadersLink: Locator;
    public surveyingAndGpsLink: Locator;
    public wheelLoadersLink: Locator;

    // Forestry and Logging Equipment
    public fellerBunchersAndHarvestersLink: Locator;
    public forestryAndLoggingAttachmentsLink: Locator;
    public grindingAndShreddingLink: Locator;
    public otherForestryAndLoggingEquipmentLink: Locator;
    public skiddersYardersAndLoadersLink: Locator;

    // Forklifts and Material Handling
    public cushionTireOrPneumaticForkliftLink: Locator;
    public forkliftAttachmentsLink: Locator;
    public rackingShelvingAndStorageLink: Locator;
    public warehouseForkliftLink: Locator;

    // Passenger Vehicles, Boats and RVs
    public atvAndUtilityVehiclesLink: Locator;
    public aircraftLink: Locator;
    public automotivePartsAndAccessoriesLink: Locator;
    public boatsLink: Locator;
    public motorcyclesLink: Locator;
    public passengerVehiclesLink: Locator;
    public pickupsAndVansLink: Locator;
    public rvsLink: Locator;
    public transitVehiclesLink: Locator;
    public wreckedAndAbandonedLink: Locator;

    // Support Equipment
    public compressorsLink: Locator;
    public enginesAndMotorsLink: Locator;
    public fuelAndLubeLink: Locator;
    public generatorsAndLightPlantsLink: Locator;
    public liftingAndRiggingLink: Locator;
    public portableHeatersAndFansLink: Locator;
    public pressureWasherLink: Locator;
    public pumpsLink: Locator;
    public tanksLink: Locator;
    public torchesWeldersAndPlasmaCuttersLink: Locator;

    // Tools, Tires and Parts
    public machineToolsLink: Locator;
    public shopToolsLink: Locator;
    public tiresAndTracksLink: Locator;

    // Trailers
    public agTrailersLink: Locator;
    public constructionTrailersLink: Locator;
    public trailersLink: Locator;

    // Trucks, Medium and Heavy Duty
    public agTrucksLink: Locator;
    public constructionTrucksLink: Locator;
    public truckPartsAndAccessoriesLink: Locator;
    public trucksLink: Locator;

    /**
     * Creates a new instance of the NavigationPage class.
     * @param page - The Playwright page object.
     */
    constructor(page: Page) {
        super(page);
        // Initialize locators
        
    }
}