# HR Performance Dashboard (Advanced)

## 🚀 Setup Instructions

1. Clone the repository:
   
bash
   git clone https://github.com/yourusername/hr-dashboard-advanced.git
   cd hr-dashboard-advanced

2. Install dependencies:

    npm install

3. Start the development server:

    npm start

4. Open http://localhost:3000 in your browser.

# Features Implemented

1.  Dashboard Homepage (/)

  -  Displays 20 dummy users with avatar, name, email, department, rating stars

  -  Bookmark toggle with color and localStorage persistence

  -  Promote toggle with color and localStorage persistence

  -  Link to detailed employee view

2.  Search & Filter

  -  Search by name, email, department (case-insensitive)

  -  Multi-select filters for department & rating

3.  Employee Details Page (/employee/[id])

  -  Tabbed UI: Overview, Projects, Feedback with dynamic mock data

4.  Bookmark Manager (/bookmarks)

  -  List bookmarked employees

  -  Remove bookmarks, Promote and Assign project UI actions

5.  Analytics Page (/analytics)

  -  Charts for department-wise average ratings and bookmark trends (mocked)

6.  State Management

  -  React Context API for bookmarks and promotions

  -  Data persistence using localStorage

7.  UI/UX

  -  Responsive design with Bootstrap

  -  Keyboard accessible controls

  -  Dynamic button states and colors for user actions

Screenshots : -
    ![Analytics](https://github.com/karthik-vvs/hr-dashboard/raw/main/screenshots/Analytics.png)
    ![Bookmarks](https://github.com/karthik-vvs/hr-dashboard/raw/main/screenshots/Bookmarks.png)
    ![Dashboard](https://github.com/karthik-vvs/hr-dashboard/raw/main/screenshots/dashboard.png)
    ![EmployeeCard](https://github.com/karthik-vvs/hr-dashboard/raw/main/screenshots/EmployeeCard.png)
    ![View](https://github.com/karthik-vvs/hr-dashboard/raw/main/screenshots/View.png)
