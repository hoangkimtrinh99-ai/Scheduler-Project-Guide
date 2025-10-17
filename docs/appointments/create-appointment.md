# Create Appointment

This guide will walk you through creating appointments in the scheduler system.

## Overview

Creating appointments allows you to book services for customers with specific staff members at designated times. The system will automatically check availability and resource requirements.

## How Smart Booking Works

The scheduler system uses intelligent logic to ensure smooth appointment booking:

### Smart Resource Management
- **Service Requirements**: Automatically checks what room types and equipment are needed for your selected services
- **Resource Filtering**: Excludes inactive rooms and equipment from availability
- **Staff Qualification**: Only shows staff members who are qualified for your selected services or desired staff name if client provide it 

### Intelligent Scheduling
- **Availability Check**: Verifies staff schedules and branch operating hours on the booking date
- **Conflict Prevention**: Automatically prevents double-booking of staff or rooms
- **Break Time Respect**: Excludes branch and staff breaks as well as personal time off from available slots

### Smart Staff Assignment
- **Workload Balancing**: If you don't specify a staff member, the system chooses the one with the lightest workload
- **Fair Distribution**: Ensures even workload distribution across all staff members

### Room Optimization
- **Service-Based Selection**: Uses the room types you specified when creating the service
- **Availability Priority**: Tries the first preferred room type, then the second, and so on
- **Compatibility Check**: Only assigns rooms that meet all service requirements

### What This Means for You
When you book an appointment, you can trust that:

✅ The time slot is genuinely available

✅ Your preferred staff member will be there (if available)

✅ All required resources are ready

✅ No scheduling conflicts will occur

✅ The system has found the most efficient option

## Create Appointment

### Step 1: Navigate to Appointments
- In the left-hand side menu, navigate to **Appointments**

### Step 2: Start Appointment Creation
- Click **Create Appointment** button, or
- Click on a **time slot** in the calendar view to start creating an appointment

![Navigate to Appointments](../image/Create%20appointment%201.png)

### Step 3: Select Customer
- **Select Existing Customer**: Choose from the dropdown list of existing customers

![Select Customer](../image/Create%20appointment%202.png)

- **Add New Customer**: Click **Add New Customer** to create a new customer record
    - Fill in customer details (name, email, phone, etc.)
    - Click **Save** to add the new customer
    - You can also create customers on the **Customers** page

![Create Customer Step 1](../image/create%20customer%201.png)

![Create Customer Step 2](../image/create%20customer%202.png)

### Step 4: Select Service Details
- **Select Branch**: Choose which branch the appointment will take place at
- **Select Service Category**: Choose the appropriate service category
- **Select Service**: Choose the specific service to be provided

![Select Service](../image/Select%20service.png)

### Step 5: Assign Staff (Optional)
- **Select Staff/Counsellor**: Choose a specific staff member for the appointment
    - This is optional - the system can auto-assign based on availability
    - Only staff members qualified for the selected service will be available

![Select Staff](../image/Select%20staff.png)

### Step 6: Assign Room or Equipment (Optional)
- **Select room/equipment**: Choose a specific room/equipment by toggle the button
    -  This is optional - the system can auto-assign based on availability

### Step 7: Set Date and Time
- **Select Date**: Choose the appointment date from the calendar
- **Select Time Slot**: Choose an available time slot
    - Available slots are shown based on:
        - Branch operating hours
        - Staff availability
        - Room and equipment availability
        - Existing appointments

### Step 8: Create Appointment
- Review all appointment details
- Click **Create** to confirm the appointment

## Appointment Configuration Details

### Customer Selection
- **Existing Customers**: Choose from previously created customer records
- **New Customers**: Create customer records with complete contact information
- **Customer Information**: Ensure accurate contact details for notifications

### Service Configuration
- **Branch Selection**: Choose the appropriate location
- **Service Category**: Select the broad category of service
- **Service Selection**: Choose the specific service to be provided
- **Service Requirements**: System automatically checks room and equipment needs

### Staff Assignment
- **Optional Assignment**: Staff can be assigned or left for auto-assignment
- **Qualification Check**: Only staff qualified for the service are available
- **Availability Check**: System shows only available staff members

### Scheduling
- **Date Selection**: Choose from available dates
- **Time Slots**: Available slots are automatically calculated
- **Conflict Prevention**: System prevents double-booking

## 📹 Video Tutorial

Follow along in this short video to see exactly how it's done!

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 20px 0;">
  <iframe src="https://www.youtube.com/embed/Duh61rGkZ-M" 
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
  </iframe>
</div>

## Troubleshooting

**Cannot see Appointments menu**: Ensure you have appropriate permissions to create appointments.

**No available time slots**: Check branch operating hours and staff schedules.

**Service not available**: Verify service is available at the selected branch.

**Staff not available**: Check staff schedules and qualifications.

**Customer not found**: Create new customer or check existing customer records.

**Appointment not saving**: Verify all required fields are filled and try again.
