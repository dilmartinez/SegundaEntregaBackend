export default {
  fileSystem: {
    path: "./DB",
  },
  mongodb: {
    cnxStr: "mongodb://localhost/ecommerce",
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      serverSelectionTimeoutMS: 5000,
    },
  },
  firebase: {
    type: "service_account",
    project_id: "backen-6c5a6",
    private_key_id: "87d730e26cd0ae0096adcbc66768a52525560939",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCpB8hDmufZ8ZJv\nn7QWXBLZwnC4OrZMe5MDdnh2BQKGxLpKxUqmof+S4Qmz46pxJezdYqqPvWgW9371\nwYF2pPhZ60aBUoW50io7r3YL7N3zqQ2EWNXjK2t9wFKQit2jS0wUJso8oX59b7U2\n4+R+vVmL8zCDwfcyLm3TXZMoVO/pwukCjm/WosB+DTOCe2Po3PuRMVGE+ccWwhqG\n0NuIk77PMq5Ympv7wneaZ261fVBZM9/ZefwtYog8b9laMrWH8wCc9KdAM0wFbzC/\nN2Fb/YhesKv6lVmAKzlIjaX7HieiSMybZ5uu9VmcciFi5OgSHfYXdwI+r6KuI5e5\n4wlh8Gm1AgMBAAECggEABoC51/DJmUbKbLuKDzXBzrMRnBZu9TIbd028/g/DFGuh\nt4bi9tZfqAc67m4RT6+qVUZ0K/oY9MOjx94G1lYr02XFfVJiU6ixHqe2IZvrJz8d\noBxWajPW7rkR7bHYXtP8Qs0CCPzoVvh2Hvz7r7nAJeEYWje00PwcfIrqj1ApN+bl\nAtGvoM4kNTiKon95suD5JI1JR2AKP/tDcrDAWuzNiZAmOKuM5dwWuvH9gUn1HDu3\nFKYlFopMZ6i5RhxscXql25+cWRiGVtHzVMB50h3j8kw0N16wn45h2xnv9I9Lenlt\nnALzJ68aH52kVs3CTHL+O7yz6nyozn0rxt9xpav1EQKBgQDaM7qATJmX8DRBy7G1\nqBHvyXJrjbqIZpTLulETgN3oijhbaSRqhCNla8myd7oDLNCRO1tyAZGRYkgey52M\nllQRMW3GdbFzqZAC9IMoHgv9oqr4BzMnQXOn6KK0d0tmI/A1GqYhy0XSlhewzTaZ\nz1uh1q0TF7PwV38eqtfqaYFtnQKBgQDGT4N26AzP9WNCc1jn+vhuEEJNOxIJ+q6U\nPkTi8HPx1FizxwXwgRNcKC/ZX63rFNl7cFWoxnnC8RGXPVWsvvx8WnjhGupclU+n\ncMiyIVRw0FWUO95k/Mo1XYriuLpfmMEvQMXI3B2R+ocpDHd/Nb4/ym0GO3HqFhvx\nPb9VUgw8+QKBgB8S4MtmnTTzAy4fiPY6shs4z++bJmZIXYZJyUQCxRdZn7780S/O\nE5Bc8kNVI4tSNX2JO3OX35gZq/Wev5gGzIAKTvzFQ/kZu6WAFrF+3exH3xslQ1ai\nzoqp6YnTt0wbcBjP67rCTPY5Y7RM9SqgSgdZIBqo9HoUq8i9QbRjRAhNAoGAa8ow\nZONAg5CXwTi9LGqHuhtwTlY7Od1eIwmtm8Si4OFQzXbyTYV7Jm5Zg8ez2sFcbPHk\nPXaUHFe3/gLCnMC6sETky0Y7+NLXluWA0QG4yhETUx0vhqi4qEUOBqnt86Qt7SdB\n2il6kSwhZzh1g1mM7VNz6x1Ij7owufGcHB4atNECgYA5nXPrrVQiJXwgzJyK7MC4\n069w9A2LLXvg4JOQbB3ai9jEgyJGYp42xIQ8ghHexAWlgpwO6idcVII1E69sOiW3\nETLD/jjed+O+ot75E+caDaZx3ReyajQ8gXIUFQ+UpiR65BExv5OX0mglndGGmLAJ\nO4k9oMIdtncz+TL/Y4FPvg==\n-----END PRIVATE KEY-----\n",
    client_email:
      "firebase-adminsdk-r57yj@backen-6c5a6.iam.gserviceaccount.com",
    client_id: "103487277148354361108",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-r57yj%40backen-6c5a6.iam.gserviceaccount.com",
  },
  sqlite3: {
    client: "sqlite3",
    connection: {
      filename: `./DB/ecommerce.sqlite`,
    },
    useNullAsDefault: true,
  },
  mariaDb: {
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      user: "root",
      database: "coderhouse",
    },
  },
};
