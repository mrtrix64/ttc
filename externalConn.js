// JavaScript Document
var dsSponsors = new Spry.Data.XMLDataSet("http://e-update.co.uk/ttc_ios/data/sponsors.php?view_xml=1?view_xml=1", "recordset/record", {sortOrderOnLoad: "ascending"});
dsSponsors.setColumnType("description", "html");
dsSponsors.setColumnType("aims", "html");
dsSponsors.setColumnType("website", "html");
	var dsSchedule = new Spry.Data.XMLDataSet("http://e-update.co.uk/ttc_ios/data/schedule.php?view_xml=1", "recordset/record", {sortOnLoad: "sort_order", sortOrderOnLoad: "ascending"});
dsSchedule.setColumnType("title", "html");
dsSchedule.setColumnType("sort_order", "number");
	var dsHotels = new Spry.Data.XMLDataSet("http://e-update.co.uk/ttc_ios/data/hotels.php?view_xml=1", "recordset/record", {sortOnLoad: "hotel_name", sortOrderOnLoad: "ascending"});
dsHotels.setColumnType("hotel_name", "html");
dsHotels.setColumnType("google_map", "html");
dsHotels.setColumnType("description", "html");
dsHotels.setColumnType("amenities", "html");
dsHotels.setColumnType("website", "html");
var dsSpecialist = new Spry.Data.XMLDataSet("http://e-update.co.uk/ttc_ios/data/specialist.php?view_xml=1", "recordset/record");
dsSpecialist.setColumnType("cms_content", "html");
dsSpecialist.setColumnType("sort_order", "number");
dsSpecialist.setColumnType("spkr_content", "html");
dsSpecialist.setColumnType("speaker1_desc", "html");
dsSpecialist.setColumnType("speaker2_desc", "html");
dsSpecialist.setColumnType("speaker3_desc", "html");
dsSpecialist.setColumnType("speaker4_desc", "html");
dsSpecialist.setColumnType("speaker5_desc", "html");
var dsPlenary = new Spry.Data.XMLDataSet("http://e-update.co.uk/ttc_ios/data/plenary.php?view_xml=1", "recordset/record");
dsPlenary.setColumnType("cms_content", "html");
dsPlenary.setColumnType("sort_order", "number");
dsPlenary.setColumnType("spkr_content", "html");
dsPlenary.setColumnType("speaker1_desc", "html");
dsPlenary.setColumnType("speaker2_desc", "html");
dsPlenary.setColumnType("speaker3_desc", "html");
dsPlenary.setColumnType("speaker4_desc", "html");
dsPlenary.setColumnType("speaker5_desc", "html");
var dsForum = new Spry.Data.XMLDataSet("http://e-update.co.uk/ttc_ios/data/marketing.php?view_xml=1", "recordset/record");
dsForum.setColumnType("cms_content", "html");
dsForum.setColumnType("sort_order", "number");
dsForum.setColumnType("spkr_content", "html");
var dsDates = new Spry.Data.XMLDataSet("http://e-update.co.uk/ttc_ios/data/dates.php?view_xml=1", "recordset/record", {sortOnLoad: "schedule_title_id", sortOrderOnLoad: "ascending"});
dsDates.setColumnType("schedule_title_id", "number");
dsDates.setColumnType("schedule_date", "date");

var delegates = new Spry.Data.XMLDataSet("http://e-update.co.uk/ttc_ios/data/delegates.php", "recordset/records");
