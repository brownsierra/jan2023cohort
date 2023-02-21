string si = "Sierra shortened is Si.";
int fifty = 50;
bool over5ft = true;
double pie = 3.14563829284748;
char frstinitial = s; 

Random rand = new Random();
for(int i = 1; i <= 10; i++)
{
    // Every time the loop executes we will get a NEW random value between 2 and 7
    Console.WriteLine(rand.Next(2,8));
}

Random si = new Random() ;
for(int i = 1; i <=10; )