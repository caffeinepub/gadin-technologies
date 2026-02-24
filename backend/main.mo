import Time "mo:core/Time";
import List "mo:core/List";

actor {
  type ContactFormSubmission = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  let submissions = List.empty<ContactFormSubmission>();

  public shared ({ caller }) func submitForm(name : Text, email : Text, message : Text) : async () {
    let newSubmission : ContactFormSubmission = {
      name;
      email;
      message;
      timestamp = Time.now();
    };
    submissions.add(newSubmission);
  };

  public query ({ caller }) func getAllSubmissions() : async [ContactFormSubmission] {
    submissions.toArray();
  };
};
