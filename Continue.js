import java.util.Scanner;

public class Continue{
  public static void main(String[] args){
	Scanner input = new Scanner (System.in);
    int x = o;
	int counter = 0;

   	System.out.println("Enter a number between 1 and 10");
    x = input.nextInt();

    while(counter < 10){
      counter++;
	  if(counter == x){
		continue;
	  }
	  System.out.println(counter);
  }
}
}