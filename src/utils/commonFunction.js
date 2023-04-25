export const isSubstring = (s1: string, s2: string) => {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();
  var M = s1.length;
  var N = s2.length;

  for (var i = 0; i <= N - M; i++) {
    var j;

    for (j = 0; j < M; j++) if (s2[i + j] != s1[j]) break;

    if (j == M) return true;
  }

  return false;
};

