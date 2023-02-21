var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllersWithViews(); //Adding ability to use Controller files to restrict personalize views
var app = builder.Build();

app.UseStaticFiles();//enabling the use of css/js/images
app.UseRouting();//enables us to have more than one route/page/view
app.UseAuthorization();

//line of code bwlow is for error codes
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
}

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}"); //This helps set up pattern for routes and 
    // tells program to look for the routes in the controller files


// app.MapGet("/", () => "Hello World! This is a test");

app.Run();
