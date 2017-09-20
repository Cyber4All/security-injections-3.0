#include <iostream>
#include <climits>
using namespace std;
int main() {
	int i;
	int j;

	cout << "For this compiler: " << endl;
	cout << "integers are: " << sizeof(int) << " bytes" << endl;
	cout << "largest integer is " << INT_MAX << endl;
	cout << "smallest integer id " << INT_MIN << endl;

	cout << "Input two integers values " << endl;
	cin >> i >> j;

	cout << endl << "You entered the following values: " << endl;
	cout << "integer " << i << " " << j << endl;

	/*
	int result = i * 10;
	cout << "Your number times 10 is " << result << endl;
	result = i + j;
	cout << "The sum of your numbers is " << result << endl;
	result = i * j;
	cout << "The product of your numbers is " << result << endl;
	*/
	return 0;
}
