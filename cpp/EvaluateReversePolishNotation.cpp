class Solution {  
public:  
    int evalRPN(vector<string> &tokens) {  
        stack<int> ss;  
        for (vector<string>::iterator iter = tokens.begin(); iter != tokens.end(); iter++) {  
            if (*iter == "+" || *iter == "-" || *iter == "*" || *iter == "/") {  
                int num1 = ss.top();  
                ss.pop();  
                int num2 = ss.top();  
                ss.pop();  
  
                switch ((*iter)[0]) {  
                case '+':  
                    ss.push(num1 + num2);  
                    break;  
                case '-':  
                    ss.push(num2 - num1);  
                    break;  
  
                case '*':  
                    ss.push(num2 * num1);  
                    break;  
                case '/':  
                    ss.push(num2 / num1);  
                    break;  
                }  
            } else {
                ss.push(atoi(iter->c_str()));  
            }
        }  
        int ret = ss.top();  
        ss.pop();  
        return ret;  
    }  
};