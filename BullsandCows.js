class Solution {
    public:
        string getHint(string secret, string guess) {
            int slen = secret.size();
            int glen = guess.size();
            
            int bull = 0;
            int cows = 0;
            vector<int> schar(10, 0);
            vector<int> gchar(10, 0);
            if (slen != glen || slen == 0) return "0A0B";
            for (int i = 0; i < slen; ++i) {
                if (secret[i] == guess[i]) {
                    bull++;
                } else {
                    schar[secret[i] - '0']++;
                    gchar[guess[i] - '0']++;
                }
            }
            for (int i = 0; i < schar.size(); ++i) {
                cows += min(schar[i], gchar[i]);
            }
            return to_string(bull) + "A" + to_string(cows) + "B";
        }
    };