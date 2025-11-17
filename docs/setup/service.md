# Setup Service

This guide will walk you through creating services in the scheduler system. Services define what appointments can be booked and what resources are required.

## Overview

Services are the bookable offerings in your scheduler system. Each service defines:

- What the service is
- How long it takes
- What it costs
- What resources are needed

## Setup Service

### Step 1: Navigate to Services
- In the left-hand side menu, navigate to **Services** → **Services**
- Click **Create Service**

![Create Service 1](../image/create%20service%201.png)

### Step 2: Input Basic Service Details

- **Service Name**: Enter a clear, descriptive name for the service
- **Category**: Select the appropriate service category from the dropdown (created in previous setup)   
- **Base Price**: Set the base price for this service
- **Duration**: Set how long the service takes (in minutes)
- **Description (Optional)**: Enter a description of what the service includes
- **Image (Optional)**: Upload an image representing the service

![Create Service 2](../image/Create%20service%202.png)

### Step 3: Resource Requirements and Branch Availability
- **Toggle Rooms**: Enable this if the service requires a specific room type
    - Select which room type is needed for this service
- **Toggle Equipment**: Enable this if the service requires specific equipment
    - Select which equipment type is needed for this service
- **Select Branch Availability**: Choose which branch(es) this service is available in
    - Select specific branches or leave as "All branches"

![Create Service 3](../image/Create%20service%203.png)

### Step 4: Skip Advanced Settings
- **Disregard Pricing Rules**: Leave this section for now
- **Disregard Cancellation Policy**: Leave this section for now

### Step 5: Save Service
Click **Create Service** to save the service

## 📹 Video Tutorial

Follow along in this short video to see exactly how it's done!

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 20px 0;">
  <iframe src="https://www.youtube.com/embed/4R6aIUp2MMY" 
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
  </iframe>
</div>

## Next Steps

After setting up services, proceed to: [Setup Staff / Counsellors](staff.md)

## Troubleshooting

**Cannot see Services menu**: Ensure you have admin permissions to access services configuration.

**Service not saving**: Verify all required fields are filled and try again.

**No categories available**: Complete the [Service Category setup](service-category.md) first.

**No room/equipment types available**: Complete the [Rooms & Equipment setup](rooms-equipment.md) first.
