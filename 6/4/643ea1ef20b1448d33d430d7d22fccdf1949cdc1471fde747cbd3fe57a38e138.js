
<!doctype html>
<html lang="es-419"
      dir="ltr">
  <head>
    <title>Firebase</title>
    <meta name="robots" content="noindex">
    <meta charset="utf-8">e="viewport" content="width=device-width, initial-scale=1">
    <meta name="iframe" content="framebox">
    
    
      <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Google+Sans:400,500|Roboto:400,400iitalic|Roboto+Mono:400,500,700&display=swap">
      <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Material+Icons&display=block">
      <link rel="stylesheet" href="https://www.gstatic.com/devrel-devsite/prod/v9e9ed563928734913447a8850ccb7e26986365be22242b631904a5bd14e09639/firebase/css/app.css">
      
        <link rel="stylesheet" href="https://www.gstatic.com/devrel-devsite/prod/v9e9ed563928734913447a8850ccb7e26986365be22242b631904a5bd14e09639/firebase/css/dark-theme.css" disabled>
      
    
    <script nonce="AkNnmZvbFL81UCeRQC64omLzQirpIZ">
      (function(){
        window.framebox=window.framebox||function(){(window.framebox.q=window.framebox.q||[]).push(arguments)};
        
        var a={},b=function(){(window.framebox.dq=window.framebox.dq||[]).push(arguments)};
        ['getUrl','handleLinkClicksInParent','initAutoSize','navigate','pushState','replaceState',
         'requestQueryAndFragment','sendEvent','updateSize','scrollParentWindow']
          .forEach(function(x){a[x]=function(){b(x,arguments)}});
        window.devsite={framebox:{AutoSizeClient:a}};
      })();
      
      (function(d,e,v,s,i,t,E){d['GoogleDevelopersObject']=i;
        t=e.createElement(v);t.async=1;t.src=s;E=e.getElementsByTagName(v)[0];
        E.parentNode.insertBefore(t,E);})(window, document, 'script',
        'https://www.gstatic.com/devrel-devsite/prod/v9e9ed563928734913447a8850ccb7e26986365be22242b631904a5bd14e09639/firebase/js/app_loader.js', '[4,"es_419",null,"/js/devsite_app_module.js","https://www.gstatic.com/devrel-devsite/prod/v9e9ed563928734913447a8850ccb7e26986365be22242b631904a5bd14e09639","https://www.gstatic.com/devrel-devsite/prod/v9e9ed563928734913447a8850ccb7e26986365be22242b631904a5bd14e09639/firebase","https://firebase-dot-devsite-v2-prod.appspot.com",1,1,null,1,null,[1,6,8,12,14,17,21,25,40,50,52,63,70,75,76,80,87,91,92,93,97,98,100,101,102,103,104,105,107,108,109,110,111,112,113,115,116,117,118,120,122,124,125,126,127,129,130,131,132,133,134,135,136,138,140,141,144,147,148,149,150,151,152,154,155,156,157,158,159,161,163,164,165,168,169,170,172,173,179,180,182,183,186,190,191,193,196],"AIzaSyAP-jjEJBzmIyKR4F-3XITp8yM9T1gEEI8","AIzaSyB6xiKGDR5O3Ak2okS4rLkauxGUG7XP0hg","firebase.google.com","AIzaSyAQk0fBONSGUqCNznf6Krs82Ap1-NV6J4o","AIzaSyCCxcqdrZ_7QMeLCRY20bh_SXdAYqy70KY",null,null,null,["BookNav__enable_book_nav_filtering","Concierge__enable_concierge","Search__enable_faceted_search","Cloud__enable_cloud_dlp_service","MiscFeatureFlags__enable_keyword_inheritance","Profiles__enable_page_saving","Significatio__enable_by_tenant","Profiles__enable_profile_communities","MiscFeatureFlags__developers_footer_image","Localization__enable_locale_redirects","Cloud__enable_cloud_facet_chat","Profiles__enable_awarding_url","AuthorPageInsights__enable_author_page_insights","Search__enable_suggestions_from_borg","Profiles__enable_developer_profiles_callout","Profiles__enable_release_notes_notifications","Search__enable_dynamic_content_confidential_banner","MiscFeatureFlags__enable_explain_this_code","Experiments__reqs_query_experiments","Cloud__enable_cloudx_ping","Profiles__enable_public_developer_profiles","BookNav__enable_tenant_cache_key","MiscFeatureFlags__enable_project_variables","MiscFeatureFlags__developers_footer_dark_image","Concierge__enable_pushui","MiscFeatureFlags__enable_firebase_utm","Profiles__enable_developer_profiles_dashboard_recommendations","ContentExcellence__enable_googler_button","SignIn__enable_auto_signin_oauth","Cloud__enable_free_trial_server_call","MiscFeatureFlags__content_publisher_push_queue","Badges__enable_drag_and_drop_badges","Significatio__enable_experiment_id_caching","Cloud__enable_cloud_shell_fte_user_flow","MiscFeatureFlags__enable_dark_theme","Profiles__require_profile_eligibility_for_signin","Profiles__enable_profile_collections","Search__enable_page_map","BookNav__enable_collapsible_book_nav","Cloud__enable_cloudx_experiment_ids","OpenInReplit__enable_replit","Profiles__enable_inferred_interests","Profiles__enable_profile_notifications_ui","ContentExcellence__enable_verified_date","Cloud__enable_cloud_shell","Badges__enable_hide_badges"],null,null,"AIzaSyBLEMok-5suZ67qRPzx0qUtbnLmyT_kCVE","https://developerscontentserving-pa.googleapis.com","AIzaSyCM4QpTRSqP5qI4Dvjt4OAScIN8sOUlO-k","https://developerscontentsearch-pa.googleapis.com",2,2]')
      
      </script>
    
  </head>
  
  <body style="height: auto; overflow: hidden; padding: 16px;"
        appearance>
    <meta name="auto_height" content="true" /><meta name="auto_width" content="true" />
       <head>
        <link href="https://firebase.google.com/static/styles/main.css?hl=es-419" rel="stylesheet"/>
        <link href="https://firebase.google.com/static/styles/code-picker.css?hl=es-419" rel="stylesheet"/>
       </head>
       <body>
        <div class="code-picker__sample-menu--mobile-wrapper">
         <select class="code-picker__sample-menu--mobile" id="firesite-samples-select">
          <option selected="">
           Autentica a un usuario nuevo
          </option>
          <option>
           Lee y escribe en tiempo real
          </option>
          <option>
           Suscribe a un usuario a un tema de notificaciones
          </option>
          <option>
           Registra un evento de Analytics personalizado
          </option>
          <option>
           Guarda una imagen en Cloud Storage
          </option>
         </select>
        </div>
        <div class="code-picker__wrapper">
         <div class="code-picker__sample-menu">
          <ul class="code-picker__sample-menu--desktop" id="firesite-samples-list">
           <li class="code-picker__samples-option empty">
            <span class="code-picker__samples-option__title empty">
            </span>
            <li class="code-picker__samples-option selected gc-analytics-event" data-action="changeSample" data-category="documentation" data-index="0" data-label="authenticate-a-new-user">
             <span class="code-picker__samples-option__title">
              Autentica a un usuario nuevo
             </span>
            </li>
            <li class="code-picker__samples-option gc-analytics-event" data-action="changeSample" data-category="documentation" data-index="1" data-label="read-write-in-realtime">
             <span class="code-picker__samples-option__title">
              Lee y escribe en tiempo real
             </span>
            </li>
            <li class="code-picker__samples-option gc-analytics-event" data-action="changeSample" data-category="documentation" data-index="2" data-label="subscribe-a-user-to-a-notification-topic">
             <span class="code-picker__samples-option__title">
              Suscribe a un usuario a un tema de notificaciones
             </span>
            </li>
            <li class="code-picker__samples-option gc-analytics-event" data-action="changeSample" data-category="documentation" data-index="3" data-label="log-a-custom-analytics-event">
             <span class="code-picker__samples-option__title">
              Registra un evento de Analytics personalizado
             </span>
            </li>
            <li class="code-picker__samples-option gc-analytics-event" data-action="changeSample" data-category="documentation" data-index="4" data-label="save-an-image-to-cloud-storage">
             <span class="code-picker__samples-option__title">
              Guarda una imagen en Cloud Storage
             </span>
            </li>
           </li>
          </ul>
         </div>
         <div class="code-picker__samples">
          <div class="code-picker__sample active" data-index="0">
           <div aria-label="languages" class="code-picker__language-tabs" role="tablist">
            <button aria-controls="0-swift-panel" aria-label="" aria-selected="false" class="code-picker__language-tabs__tab" id="0-swift-tab" role="tab" tab-label="">
             Swift
            </button>
            <button aria-controls="0-objective-c-panel" aria-label="" aria-selected="false" class="code-picker__language-tabs__tab" id="0-objective-c-tab" role="tab" tab-label="">
             Objective-C
            </button>
            <button aria-controls="0-kotlin-panel" aria-label="Android" aria-selected="false" class="code-picker__language-tabs__tab two-line" id="0-kotlin-tab" role="tab" tab-label="Android">
             Kotlin+KTX
             <span aria-controls="0-kotlin-panel" class="code-picker__subtitle" id="0-kotlin-tab">
              <br>
               Android
              </br>
             </span>
            </button>
            <button aria-controls="0-java-panel" aria-label="Android" aria-selected="false" class="code-picker__language-tabs__tab two-line" id="0-java-tab" role="tab" tab-label="Android">
             Java
             <span aria-controls="0-java-panel" class="code-picker__subtitle" id="0-java-tab">
              <br/>
              Android
             </span>
            </button>
            <button aria-controls="0-javascript-panel" aria-label="" aria-selected="false" class="code-picker__language-tabs__tab" id="0-javascript-tab" role="tab" tab-label="">
             JavaScript
            </button>
            <button aria-controls="0-dart-panel" aria-label="Flutter" aria-selected="false" class="code-picker__language-tabs__tab two-line" id="0-dart-tab" role="tab" tab-label="Flutter">
             Dart
             <span aria-controls="0-dart-panel" class="code-picker__subtitle" id="0-dart-tab">
              <br/>
              Flutter
             </span>
            </button>
            <button aria-controls="0-unity-panel" aria-label="" aria-selected="false" class="code-picker__language-tabs__tab" id="0-unity-tab" role="tab" tab-label="">
             Unity
            </button>
            <button aria-controls="0-cplusplus-panel" aria-label="" aria-selected="false" class="code-picker__language-tabs__tab" id="0-cplusplus-tab" role="tab" tab-label="">
             C++
            </button>
           </div>
           <section aria-labelledby="0-swift-tab" class="code-picker__sample__code" hidden='"hidden"' id="0-swift-panel" role="tabpanel" tabindex="0">
            <pre class="prettyprint">Auth.auth().addStateDidChangeListener { (auth, user) in
  if let user = user {
    let email = user.email
    // ...
  }
}
Auth.auth().signIn(withEmail: userEmail, password: password) { (user, error) in
  if let user = user {
    // ...
  }
}
</pre>
           </section>
           <section aria-labelledby="0-objective-c-tab" class="code-picker__sample__code" hidden='"hidden"' id="0-objective-c-panel" role="tabpanel" tabindex="0">
            <pre class="prettyprint">[[FIRAuth auth] addAuthStateDidChangeListener:^(FIRAuth * _Nonnull auth,
                                                FIRUser * _Nullable user) {
  if (user) {
    NSString *email = user.email;
    // ...
  }
}];
[[FIRAuth auth] signInWithEmail:email
                        password:password
                      completion:^(FIRUser * _Nullable user,
                                  NSError * _Nullable error) {
  if (error) {
    // ...
  }
}];
</pre>
           </section>
           <section aria-labelledby="0-kotlin-tab" class="code-picker__sample__code" hidden='"hidden"' id="0-kotlin-panel" role="tabpanel" tabindex="0">
            <pre class="prettyprint">val auth = Firebase.auth;
auth.signInWithEmailAndPassword(email, password)
    .addOnCompleteListener(this) { task -&gt;
        if (task.isSuccessful) {
            val user = task.result.user
            // ...
        }
    }
</pre>
           </section>
           <section aria-labelledby="0-java-tab" class="code-picker__sample__code" hidden='"hidden"' id="0-java-panel" role="tabpanel" tabindex="0">
            <pre class="prettyprint">FirebaseAuth auth = FirebaseAuth.getInstance();
auth.signInWithEmailAndPassword(email, password)
    .addOnCompleteListener(new OnCompleteListener() {
        @Override
        public void onComplete(Task task) {
            if (task.isSuccessful()) {
                FirebaseUser user = task.getResult().getUser();
                String email = user.getEmail();
                // ...
            }
        }
    });
</pre>
           </section>
           <section aria-labelledby="0-javascript-tab" class="code-picker__sample__code" hidden='"hidden"' id="0-javascript-panel" role="tabpanel" tabindex="0">
            <pre class="prettyprint">firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in
        var email = user.email;
        // ...
    } else {
        // User is not signed in
        // ...
    }
});
firebase.auth().signInWithEmailAndPassword(email, password);
</pre>
           </section>
           <section aria-labelledby="0-dart-tab" class="code-picker__sample__code" hidden='"hidden"' id="0-dart-panel" role="tabpanel" tabindex="0">
            <pre class="prettyprint">FirebaseAuth.instance.authStateChanges().listen((User? user) {
    if (user != null) {
      // user is signed in
      var email = user.email;
    } else {
      // user is not signed in
      // …
    }
});

await FirebaseAuth.instance.signInWithEmailAndPassword(
    email: emailAddress,
    password: password
  );
</pre>
           </section>
           <section aria-labelledby="0-unity-tab" class="code-picker__sample__code" hidden='"hidden"' id="0-unity-panel" role="tabpanel" tabindex="0">
            <pre class="prettyprint">Firebase.Auth.FirebaseAuth auth = Firebase.Auth.FirebaseAuth.DefaultInstance;
auth.SignInWithEmailAndPasswordAsync(email, password).ContinueWithOnMainThread(task =&gt; {
  if (!(task.IsCanceled || task.IsFaulted)) {
    Firebase.Auth.FirebaseUser newUser = task.Result;
    Debug.LogFormat("User signed in successfully: {0} ({1})",
        newUser.DisplayName, newUser.UserId);
  }
});
</pre>
           </section>
           <section aria-labelledby="0-cplusplus-tab" class="code-picker__sample__code" hidden='"hidden"' id="0-cplusplus-panel" role="tabpanel" tabindex="0">
            <pre class="prettyprint">firebase::auth::Auth *auth = firebase::auth::Auth::GetAuth(app);
auth-&gt;SignInWithEmailAndPassword(email, password);

// poll the result in your game loop
firebase::Future&lt;firebase::auth::User *&gt; result =
    auth-&gt;SignInWithEmailAndPasswordLastResult();

if (result.status() == firebase::kFutureStatusComplete) {
    if (result.error() == firebase::auth::kAuthErrorNone) {
        firebase::auth::User *user = *result.result();
        std::cout &lt;&lt; Sign in succeeded for email &lt;&lt; user-&gt;email() &lt;&lt; std::endl;
    }
}
</pre>
           </section>
          </div>
          <div class="code-picker__sample" data-index="1">
           <div aria-label="languages" class="code-picker__language-tabs" role="tablist">
            <button aria-controls="1-swift-panel" aria-label="" aria-selected="false" class="code-picker__language-tabs__tab" id="1-swift-tab" role="tab" tab-label="">
             Swift
            </button>
            <button aria-controls="1-objective-c-panel" aria-label="" aria-selected="false" class="code-picker__language-tabs__tab" id="1-objective-c-tab" role="tab" tab-label="">
             Objective-C
            </button>
            <button aria-controls="1-kotlin-panel" aria-label="Android" aria-selected="false" class="code-picker__language-tabs__tab two-line" id="1-kotlin-tab" role="tab" tab-label="Android">
             Kotlin+KTX
             <span aria-controls="1-kotlin-panel" class="code-picker__subtitle" id="1-kotlin-tab">
              <br/>
              Android
             </span>
            </button>
            <button aria-controls="1-java-panel" aria-label="Android" aria-selected="false" class="code-picker__language-tabs__tab two-line" id="1-java-tab" role="tab" tab-label="Android">
             Java
             <span aria-controls="1-java-panel" class="code-picker__subtitle" id="1-java-tab">
              <br/>
              Android
             </span>
            </button>
            <button aria-controls="1-javascript-panel" aria-label="" aria-selected="false" class="code-picker__language-tabs__tab" id="1-javascript-tab" role="tab" tab-label="">
             JavaScript
            </button>
            <button aria-controls="1-dart-panel" aria-label="Flutter" aria-selected="false" class="code-picker__language-tabs__tab two-line" id="1-dart-tab" role="tab" tab-label="Flutter">
             Dart
             <span aria-controls="1-dart-panel" class="code-picker__subtitle" id="1-dart-tab">
              <br/>
              Flutter
             </span>
            </button>
            <button aria-controls="1-unity-panel" aria-label="" aria-selected="false" class="code-picker__language-tabs__tab" id="1-unity-tab" role="tab" tab-label="">
             Unity
            </button>
            <button aria-controls="1-cplusplus-panel" aria-label="" aria-selected="false" class="code-picker__language-tabs__tab" id="1-cplusplus-tab" role="tab" tab-label="">
             C++
            </button>
           </div>
           <section aria-labelledby="1-swift-tab" class="code-picker__sample__code" hidden='"hidden"' id="1-swift-panel" role="tabpanel" tabindex="0">
            <pre class="prettyprint">let db = Firestore.firestore()
// Write
db.collection("users").document("alovelace").setData([
    "firstname": "Ada",
    "lastname": "Lovelace"
])
// Read / listen
db.collection("users").document("alovelace")
  .addSnapshotListener { documentSnapshot, error in
    guard let document = documentSnapshot else {
      print("Error fetching document: \(error!)")
      return
    }
    guard let data = document.data() else {
      print("Document data was empty.")
      return
    }
    print("Current data: \(data)")
  }
</pre>
           </section>
           <section aria-labelledby="1-objective-c-tab" class="code-picker__sample__code" hidden='"hidden"' id="1-objective-c-panel" role="tabpanel" tabindex="0">
            <pre class="prettyprint">FIRFirestore *defaultFirestore = [FIRFirestore firestore];
// Write
[[[self.db collectionWithPath:@"users"] documentWithPath:@"alovelace"] setData:@{
  @"firstname": @"Ada",
  @"lastname": @"Lovelace"
}];

// Read / listen
[[[self.db collectionWithPath:@"users"] documentWithPath:@"alovelace"]
    addSnapshotListener:^(FIRDocumentSnapshot *snapshot, NSError *error) {
      if (snapshot == nil) {
        NSLog(@"Error fetching document: %@", error);
        return;
      }
      NSLog(@"Current data: %@", snapshot.data);
    }];
</pre>
           </section>
           <section aria-labelledby="1-kotlin-tab" class="code-picker__sample__code" hidden='"hidden"' id="1-kotlin-panel" role="tabpanel" tabindex="0">
            <pre class="prettyprint">val db = Firebase.firestore
// Write
val user = hashMapOf(
    "firstname" to "Ada",
    "lastname" to "Lovelace"
)
db.collection("users").document("alovelace")
    .set(user)

// Read / listen
val docRef = db.collection("users").document("alovelace") docRef.addSnapshotListener { snapshot, e -&gt;
    if (e != null) {
        Log.w(TAG, "Listen failed.", e)
        return@addSnapshotListener
    }
    if (snapshot != null &amp;&amp; snapshot.exists()) {
        Log.d(TAG, "Current data: ${snapshot.data}")
    } else {
        Log.d(TAG, "Current data: null")
    }
}
</pre>
           </section>
           <section aria-labelledby="1-java-tab" class="code-picker__sample__code" hidden='"hidden"' id="1-java-panel" role="tabpanel" tabindex="0">
            <pre class="prettyprint">FirebaseFirestore db = FirebaseFirestore.getInstance();
// Write
Map&lt;String, Object&gt; user = new HashMap&lt;&gt;(); user.put("firstname", "Ada"); user.put("lastname", "Lovelace");
db.collection("users").document("alovelace")
        .set(user);

// Read / listen
final DocumentReference docRef = db.collection("users").document("alovelace"); docRef.addSnapshotListener(new EventListener&lt;DocumentSnapshot&gt;() {
    @Override
    public void onEvent(@Nullable DocumentSnapshot snapshot,
                        @Nullable FirebaseFirestoreException e) {
        if (e != null) {
            Log.w(TAG, "Listen failed.", e);
            return;
        }

        if (snapshot != null &amp;&amp; snapshot.exists()) {
            Log.d(TAG, "Current data: " + snapshot.getData());
        } else {
            Log.d(TAG, "Current data: null");
        }
    }
});
</pre>
           </section>
           <section aria-labelledby="1-javascript-tab" class="code-picker__sample__code" hidden='"hidden"' id="1-javascript-panel" role="tabpanel" tabindex="0">
            <pre class="prettyprint">import { getFirestore, doc, setDoc, onSnapshot } from "firebase/firestore";
const db = getFirestore(firebaseApp);
// Write
await setDoc(doc(db, "users", "alovelace"), {
  firstname: "Ada",
  lastname: "Lovelace",
});
// Read / listen
onSnapshot(doc(db, "users", "alovelace"), (docSnapshot) =&gt; {
  console.log("Latest data: ", docSnapshot.data());
  // ...
});
</pre>
           </section>
           <section aria-labelledby="1-dart-tab" class="code-picker__sample__code" hidden='"hidden"' id="1-dart-panel" role="tabpanel" tabindex="0">
            <pre class="prettyprint">db = FirebaseFirestore.instance;
// Write
final user = &lt;String, String&gt;{
  "firstname": "Ada",
  "lastname": "Lovelace"
};
db
  .collection("users")
  .doc("alovelace")
  .set(user)

// Read / listen
final docRef = db.collection("users").doc("alovelace"); docRef.snapshots().listen(
      (event) =&gt; print("current data: ${event.data()}"),
      onError: (error) =&gt; print("Listen failed: $error"),
    );
</pre>
           </section>
           <section aria-labelledby="1-unity-tab" class="code-picker__sample__code" hidden='"hidden"' id="1-unity-panel" role="tabpanel" tabindex="0">
            <pre class="prettyprint">// Write
DocumentReference docRef = db.Collection("users").Document("alovelace"); Dictionary&lt;string, object&gt; user = new Dictionary&lt;string, object&gt; {
  { "firstname", "Ada" },
  { "lastname", "Lovelace" }
};
docRef.SetAsync(user);
// Read / listen
docRef.Listen(
  snapshot =&gt;
  {
    IDictionary&lt;string, object&gt; dict = snapshot.ToDictionary();
    foreach(var kVPair in dict)
    {
      Console.WriteLine($"{kVPair.Key}: {kVPair.Value}");
    }
  }
);
</pre>
           </section>
           <section aria-labelledby="1-cplusplus-tab" class="code-picker__sample__code" hidden='"hidden"' id="1-cplusplus-panel" role="tabpanel" tabindex="0">
            <pre class="prettyprint">Firestore* db = Firestore::GetInstance();
// Write
db-&gt;Collection("users")
    .Document("alovelace")
    .Set({ {"firstname", FieldValue::String("Ada")},
          {"lastname", FieldValue::String("Lovelace")})

// Read / listen
DocumentReference doc_ref = db-&gt;Collection("users").Document("alovelace"); doc_ref.AddSnapshotListener(
    [](const DocumentSnapshot&amp; snapshot, Error error, const std::string&amp; errorMsg) {
      if (error == Error::kErrorOk) {
        if (snapshot.exists()) {
          std::cout &lt;&lt; "Current data: " &lt;&lt; snapshot &lt;&lt; std::endl;
        } else {
          std::cout &lt;&lt; "Current data: null" &lt;&lt; std::endl;
        }
      } else {
        std::cout &lt;&lt; "Listen failed: " &lt;&lt; error &lt;&lt; std::endl;
      }
    });
</pre>
           </section>
          </div>
          <div class="code-picker__sample" data-index="2">
           <div aria-label="languages" class="code-picker__language-tabs" role="tablist">
            <button aria-controls="2-swift-panel" aria-label="" aria-selected="false" class="code-picker__language-tabs__tab" id="2-swift-tab" role="tab" tab-label="">
             Swift
            </button>
            <button aria-controls="2-objective-c-panel" aria-label="" aria-selected="false" class="code-picker__language-tabs__tab" id="2-objective-c-tab" role="tab" tab-label="">
             Objective-C
            </button>
            <button aria-controls="2-kotlin-panel" aria-label="Android" aria-selected="false" class="code-picker__language-tabs__tab two-line" id="2-kotlin-tab" role="tab" tab-label="Android">
             Kotlin+KTX
             <span aria-controls="2-kotlin-panel" class="code-picker__subtitle" id="2-kotlin-tab">
              <br/>
              Android
             </span>
            </button>
            <button aria-controls="2-java-panel" aria-label="Android" aria-selected="false" class="code-picker__language-tabs__tab two-line" id="2-java-tab" role="tab" tab-label="Android">
             Java
             <span aria-controls="2-java-panel" class="code-picker__subtitle" id="2-java-tab">
              <br/>
              Android
             </span>
            </button>
            <button aria-controls="2-dart-panel" aria-label="Flutter" aria-selected="false" class="code-picker__language-tabs__tab two-line" id="2-dart-tab" role="tab" tab-label="Flutter">
             Dart
             <span aria-controls="2-dart-panel" class="code-picker__subtitle" id="2-dart-tab">
              <br/>
              Flutter
             </span>
            </button>
            <button aria-controls="2-unity-panel" aria-label="" aria-selected="false" class="code-picker__language-tabs__tab" id="2-unity-tab" role="tab" tab-label="">
             Unity
            </button>
            <button aria-controls="2-cplusplus-panel" aria-label="" aria-selected="false" class="code-picker__language-tabs__tab" id="2-cplusplus-tab" role="tab" tab-label="">
             C++
            </button>
           </div>
           <section aria-labelledby="2-swift-tab" class="code-picker__sample__code" hidden='"hidden"' id="2-swift-panel" role="tabpanel" tabindex="0">
            <pre class="prettyprint">Messaging.messaging().subscribe(toTopic: "/topics/news")
</pre>
           </section>
           <section aria-labelledby="2-objective-c-tab" class="code-picker__sample__code" hidden='"hidden"' id="2-objective-c-panel" role="tabpanel" tabindex="0">
            <pre class="prettyprint">[[FIRMessaging messaging] subscribeToTopic:@"/topics/news"];
</pre>
           </section>
           <section aria-labelledby="2-kotlin-tab" class="code-picker__sample__code" hidden='"hidden"' id="2-kotlin-panel" role="tabpanel" tabindex="0">
            <pre class="prettyprint">Firebase.messaging.subscribeToTopic("news");
</pre>
           </section>
           <section aria-labelledby="2-java-tab" class="code-picker__sample__code" hidden='"hidden"' id="2-java-panel" role="tabpanel" tabindex="0">
            <pre class="prettyprint">FirebaseMessaging.getInstance().subscribeToTopic("news");
</pre>
           </section>
           <section aria-labelledby="2-dart-tab" class="code-picker__sample__code" hidden='"hidden"' id="2-dart-panel" role="tabpanel" tabindex="0">
            <pre class="prettyprint">await FirebaseMessaging.instance.subscribeToTopic("topic");
</pre>
           </section>
           <section aria-labelledby="2-unity-tab" class="code-picker__sample__code" hidden='"hidden"' id="2-unity-panel" role="tabpanel" tabindex="0">
            <pre class="prettyprint">Firebase.Messaging.FirebaseMessaging.Subscribe("news");
</pre>
           </section>
           <section aria-labelledby="2-cplusplus-tab" class="code-picker__sample__code" hidden='"hidden"' id="2-cplusplus-panel" role="tabpanel" tabindex="0">
            <pre class="prettyprint">firebase::messaging::Subscribe("news");
</pre>
           </section>
          </div>
          <div class="code-picker__sample" data-index="3">
           <div aria-label="languages" class="code-picker__language-tabs" role="tablist">
            <button aria-controls="3-swift-panel" aria-label="" aria-selected="false" class="code-picker__language-tabs__tab" id="3-swift-tab" role="tab" tab-label="">
             Swift
            </button>
            <button aria-controls="3-objective-c-panel" aria-label="" aria-selected="false" class="code-picker__language-tabs__tab" id="3-objective-c-tab" role="tab" tab-label="">
             Objective-C
            </button>
            <button aria-controls="3-kotlin-panel" aria-label="Android" aria-selected="false" class="code-picker__language-tabs__tab two-line" id="3-kotlin-tab" role="tab" tab-label="Android">
             Kotlin+KTX
             <span aria-controls="3-kotlin-panel" class="code-picker__subtitle" id="3-kotlin-tab">
              <br/>
              Android
             </span>
            </button>
            <button aria-controls="3-java-panel" aria-label="Android" aria-selected="false" class="code-picker__language-tabs__tab two-line" id="3-java-tab" role="tab" tab-label="Android">
             Java
             <span aria-controls="3-java-panel" class="code-picker__subtitle" id="3-java-tab">
              <br/>
              Android
             </span>
            </button>
            <button aria-controls="3-dart-panel" aria-label="Flutter" aria-selected="false" class="code-picker__language-tabs__tab two-line" id="3-dart-tab" role="tab" tab-label="Flutter">
             Dart
             <span aria-controls="3-dart-panel" class="code-picker__subtitle" id="3-dart-tab">
              <br/>
              Flutter
             </span>
            </button>
            <button aria-controls="3-unity-panel" aria-label="" aria-selected="false" class="code-picker__language-tabs__tab" id="3-unity-tab" role="tab" tab-label="">
             Unity
            </button>
            <button aria-controls="3-cplusplus-panel" aria-label="" aria-selected="false" class="code-picker__language-tabs__tab" id="3-cplusplus-tab" role="tab" tab-label="">
             C++
            </button>
           </div>
           <section aria-labelledby="3-swift-tab" class="code-picker__sample__code" hidden='"hidden"' id="3-swift-panel" role="tabpanel" tabindex="0">
            <pre class="prettyprint">Analytics.logEvent("share_image", parameters: ["id" : "image123"])
</pre>
           </section>
           <section aria-labelledby="3-objective-c-tab" class="code-picker__sample__code" hidden='"hidden"' id="3-objective-c-panel" role="tabpanel" tabindex="0">
            <pre class="prettyprint">[FIRAnalytics logEventWithName:@"share_image"
                    parameters:@{@"id": "image123"}];
</pre>
           </section>
           <section aria-labelledby="3-kotlin-tab" class="code-picker__sample__code" hidden='"hidden"' id="3-kotlin-panel" role="tabpanel" tabindex="0">
            <pre class="prettyprint">Firebase.analytics.logEvent("share_image") {
  param("id", "image123")
}
</pre>
           </section>
           <section aria-labelledby="3-java-tab" class="code-picker__sample__code" hidden='"hidden"' id="3-java-panel" role="tabpanel" tabindex="0">
            <pre class="prettyprint">Bundle params = new Bundle();
params.putString("id", "image123");

FirebaseAnalytics.getInstance(this).logEvent("share_image", params);
</pre>
           </section>
           <section aria-labelledby="3-dart-tab" class="code-picker__sample__code" hidden='"hidden"' id="3-dart-panel" role="tabpanel" tabindex="0">
            <pre class="prettyprint">await FirebaseAnalytics.instance.logEvent(
    name: "select_content",
    parameters: {
        "content_type": "image",
        "item_id": itemId,
    },
);
</pre>
           </section>
           <section aria-labelledby="3-unity-tab" class="code-picker__sample__code" hidden='"hidden"' id="3-unity-panel" role="tabpanel" tabindex="0">
            <pre class="prettyprint">Firebase.Analytics.FirebaseAnalytics.LogEvent("share_image", "id", "image123");
</pre>
           </section>
           <section aria-labelledby="3-cplusplus-tab" class="code-picker__sample__code" hidden='"hidden"' id="3-cplusplus-panel" role="tabpanel" tabindex="0">
            <pre class="prettyprint">const firebase::analytics::Parameter kParams[] = { firebase::analytics::Parameter("id", "image123") };
firebase::analytics::LogEvent("share_image", kParams, sizeof(kParams) / sizeof(kParams[0]));
</pre>
           </section>
          </div>
          <div class="code-picker__sample" data-index="4">
           <div aria-label="languages" class="code-picker__language-tabs" role="tablist">
            <button aria-controls="4-swift-panel" aria-label="" aria-selected="false" class="code-picker__language-tabs__tab" id="4-swift-tab" role="tab" tab-label="">
             Swift
            </button>
            <button aria-controls="4-objective-c-panel" aria-label="" aria-selected="false" class="code-picker__language-tabs__tab" id="4-objective-c-tab" role="tab" tab-label="">
             Objective-C
            </button>
            <button aria-controls="4-kotlin-panel" aria-label="Android" aria-selected="false" class="code-picker__language-tabs__tab two-line" id="4-kotlin-tab" role="tab" tab-label="Android">
             Kotlin+KTX
             <span aria-controls="4-kotlin-panel" class="code-picker__subtitle" id="4-kotlin-tab">
              <br/>
              Android
             </span>
            </button>
            <button aria-controls="4-java-panel" aria-label="Android" aria-selected="false" class="code-picker__language-tabs__tab two-line" id="4-java-tab" role="tab" tab-label="Android">
             Java
             <span aria-controls="4-java-panel" class="code-picker__subtitle" id="4-java-tab">
              <br/>
              Android
             </span>
            </button>
            <button aria-controls="4-javascript-panel" aria-label="" aria-selected="false" class="code-picker__language-tabs__tab" id="4-javascript-tab" role="tab" tab-label="">
             JavaScript
            </button>
            <button aria-controls="4-dart-panel" aria-label="Flutter" aria-selected="false" class="code-picker__language-tabs__tab two-line" id="4-dart-tab" role="tab" tab-label="Flutter">
             Dart
             <span aria-controls="4-dart-panel" class="code-picker__subtitle" id="4-dart-tab">
              <br/>
              Flutter
             </span>
            </button>
            <button aria-controls="4-unity-panel" aria-label="" aria-selected="false" class="code-picker__language-tabs__tab" id="4-unity-tab" role="tab" tab-label="">
             Unity
            </button>
            <button aria-controls="4-cplusplus-panel" aria-label="" aria-selected="false" class="code-picker__language-tabs__tab" id="4-cplusplus-tab" role="tab" tab-label="">
             C++
            </button>
           </div>
           <section aria-labelledby="4-swift-tab" class="code-picker__sample__code" hidden='"hidden"' id="4-swift-panel" role="tabpanel" tabindex="0">
            <pre class="prettyprint">let storageRef = Storage.storage().reference()
let riversRef = storageRef.child("image/rivers.jpg")
let uploadTask = riversRef.putData(data, metadata: nil) { (metadata, error) in
  guard let metadata = metadata else { return }
  // ...
}
</pre>
           </section>
           <section aria-labelledby="4-objective-c-tab" class="code-picker__sample__code" hidden='"hidden"' id="4-objective-c-panel" role="tabpanel" tabindex="0">
            <pre class="prettyprint">FIRStorage *storage = [FIRStorage storage];

FIRStorageReference *riversRef = [storageRef child:@"images/rivers.jpg"];
FIRStorageUploadTask *uploadTask = [riversRef putData:data
                                              metadata:nil
                                            completion:^(FIRStorageMetadata *metadata,
                                                        NSError *error) {
  if (error != nil) {
    // ...
  } else {
    // ...
  }
}];
</pre>
           </section>
           <section aria-labelledby="4-kotlin-tab" class="code-picker__sample__code" hidden='"hidden"' id="4-kotlin-panel" role="tabpanel" tabindex="0">
            <pre class="prettyprint">val storage = Firebase.storage

storage.child("images/rivers.jpg").putBytes(data)
    .addOnFailureListener {
      // ...
    }.addOnSuccessListener { taskSnapshot -&gt;
      // taskSnapshot.metadata contains file metadata such as size, content-type, etc.
      // ...
    };
</pre>
           </section>
           <section aria-labelledby="4-java-tab" class="code-picker__sample__code" hidden='"hidden"' id="4-java-panel" role="tabpanel" tabindex="0">
            <pre class="prettyprint">FirebaseStorage storage = FirebaseStorage.getInstance();

storage.child("images/rivers.jpg").putBytes(data)
    .addOnFailureListener(new OnFailureListener() {
        @Override
        public void onFailure(@NonNull Exception exception) {
            // ...
        }
    }).addOnSuccessListener(new OnSuccessListener&lt;UploadTask.TaskSnapshot&gt;() {
        @Override
        public void onSuccess(UploadTask.TaskSnapshot taskSnapshot) {
            // ...
        }
    });
</pre>
           </section>
           <section aria-labelledby="4-javascript-tab" class="code-picker__sample__code" hidden='"hidden"' id="4-javascript-panel" role="tabpanel" tabindex="0">
            <pre class="prettyprint">var storageRef = firebase.storage().ref();

storageRef.child("images/rivers.jpg").put(data).then(function(snapshot) {
  // ...
});
</pre>
           </section>
           <section aria-labelledby="4-dart-tab" class="code-picker__sample__code" hidden='"hidden"' id="4-dart-panel" role="tabpanel" tabindex="0">
            <pre class="prettyprint">final storageRef = FirebaseStorage.instance.ref();
final mountainsRef = storageRef.child("images/mountains");
mountainsRef.putFile(imageData);
</pre>
           </section>
           <section aria-labelledby="4-unity-tab" class="code-picker__sample__code" hidden='"hidden"' id="4-unity-panel" role="tabpanel" tabindex="0">
            <pre class="prettyprint">FirebaseStorage storage = FirebaseStorage.DefaultInstance;
StorageReference riversRef = storage.GetReference("images/rivers.jpg");
riversRef.PutBytesAsync(customBytes).ContinueWithOnMainThread(task =&gt; {
    if (!(task.IsCanceled || task.IsFaulted)) {
        // Metadata contains file metadata such as size, content-type, and etc.
        StorageMetadata metadata = task.Result;
        // ...
    }
});
</pre>
           </section>
           <section aria-labelledby="4-cplusplus-tab" class="code-picker__sample__code" hidden='"hidden"' id="4-cplusplus-panel" role="tabpanel" tabindex="0">
            <pre class="prettyprint">firebase::storage::Storage* storage = firebase::storage::Storage::GetInstance(app);
firebase::storage::StorageReference ref = storage-&gt;GetReference("images/rivers.jpg");
firebase::Future&lt;firebase::storage::Metadata&gt; result = ref.PutBytes(data, data_size, nullptr, nullptr);
// ...
if (result.Status() == firebase::kFutureStatusComplete) {
  if (result.Error() == firebase::storage::kErrorNone) {
    // ...
  }
}</pre>
           </section>
          </div>
         </div>
        </div>
        <script>
         /**
 * Code sample picker
 */
(function() {
  /* Classnames */
  const CLASS_SELECTED = 'selected';
  const CLASS_OPTION = 'code-picker__samples-option';
  const CLASS_OPTION_TITLE = 'code-picker__samples-option__title';

  /* Elements */
  var desktopSampleMenu = document.querySelector(
    '.code-picker__sample-menu--desktop'
  );
  var mobileSampleMenu = document.querySelector(
    '.code-picker__sample-menu--mobile'
  );
  var options = castToArray(document.querySelectorAll('.' + CLASS_OPTION));
  var codeSamples = castToArray(
    document.querySelectorAll('.code-picker__sample')
  );
  var selectedOption = document.querySelector(
    '.' + CLASS_OPTION + '.' + CLASS_SELECTED
  );
  var selectedIndex = selectedOption.getAttribute('data-index');
  var kdMenuElements;

  /* language tabs */
  const tabs = document.querySelectorAll('[role="tab"]');
  const panels = document.querySelectorAll('[role="tabpanel"]');

  /* key direction reference */
  const keys = {
    end: 35,
    home: 36,
    left: 37,
    right: 39,
  };

  // Add or substract depending on key pressed
  const direction = {
    37: -1,
    38: -1,
    39: 1,
    40: 1,
  };

  /* Init mobile event listeners */
  mobileSampleMenu.addEventListener('change', function(event) {
    selectedIndex = mobileSampleMenu.selectedIndex;

    // Update mobile menu
    options.forEach(function(option, i) {
      toggleClass(option, CLASS_SELECTED, i === selectedIndex);
      selectedOption = i === selectedIndex ? option : selectedOption;
    });

    updateActiveCodeSample();
  });

  /* Init desktop event listeners */
  desktopSampleMenu.addEventListener('click', function(event) {
    var option = event.target;
    var clickedOnOption =
      !option.classList.contains(CLASS_OPTION) &&
      !option.classList.contains(CLASS_OPTION_TITLE);

    if (clickedOnOption || option.classList.contains('empty')) {
      return;
    } else if (option.classList.contains(CLASS_OPTION_TITLE)) {
      option = event.target.parentElement;
    }

    // Update selected menu item
    selectedOption.classList.remove(CLASS_SELECTED);
    option.classList.add(CLASS_SELECTED);
    selectedOption = option;
    selectedIndex = parseInt(option.dataset.index);

    // Update code sample
    updateActiveCodeSample();

    // Update the mobile select
    if (kdMenuElements === undefined) {
      kdMenuElements = castToArray(
        document.querySelectorAll('ul.kd-menulist>li')
      );
    }
    kdMenuElements[selectedIndex] && kdMenuElements[selectedIndex].click();
  });

  /* Helpers */
  function castToArray(elements) {
    return Array.prototype.slice.call(elements);
  }

  function toggleClass(element, className, toggle) {
    if (toggle) {
      element.classList.add(className);
    } else {
      element.classList.remove(className);
    }
  }

  function updateActiveCodeSample() {
    codeSamples.forEach(function(block) {
      const isCurrentBlock = parseInt(block.dataset.index) === selectedIndex;
      toggleClass(block, 'active', isCurrentBlock);

      if (isCurrentBlock) {
        const firstTab = block.querySelector('[role="tab"]');
        activateTab(firstTab);
      }
    });
  }

  /*
  *  Initializes language tabs & panels
  */
  function initLanguageTabs() {
    tabs.forEach((tab, index) => {
      tab.index = index;
      addListeners(tab);
    });

    function addListeners(tab) {
      tab.addEventListener('click', e => activateTab(e.target));
      tab.addEventListener('keydown', keydownListener);
      tab.addEventListener('keyup', keyupListener);

      // Make the fist one selected by default
      activateTab(tabs[0]);
    }
  }

  /**
   * Key down on language tabs/buttons
   * @param {KeyboardEvent} event
   */
  function keydownListener(event) {
    switch (event.keyCode) {
      case keys.end:
        event.preventDefault();
        // Activate last tab
        activateTab(tabs[tabs.length - 1]);
        break;
      case keys.home:
        event.preventDefault();
        // Activate first tab
        activateTab(tabs[0]);
        break;
    }
  }

  /**
   * Key up on language tabs/buttons
   * @param {KeyboardEvent} event
   */
  function keyupListener(event) {
    switch (event.keyCode) {
      case keys.left:
      case keys.right:
        switchTab(event.keyCode);
        break;
    }
  }

  /**
   * Rotates through tabs/buttons
   * @param {number} keyCode
   */
  function switchTab(keyCode) {
    tabs.forEach(tab => {
      tab.addEventListener('focus', () => activateTab(tab));
    });

    if (direction[keyCode]) {
      const target = event.target;
      if (target.index !== undefined) {
        if (tabs[target.index + direction[keyCode]]) {
          tabs[target.index + direction[keyCode]].focus();
        } else if (keyCode === keys.left) {
          tabs[tabs.length - 1].focus();
        } else if (keyCode === keys.right) {
          tabs[0].focus();
        }
      }
    }
  }

  /**
   * Deactivate all tabs and tab panels
   */
  function deactivateTabs() {
    tabs.forEach(tab => {
      tab.setAttribute('aria-selected', 'false');
    });
    panels.forEach(panel => {
      panel.setAttribute('hidden', 'hidden');
    });
  }

  /**
   * Activates given tab
   * @param {HTMLElement} tab
   */
  function activateTab(tab) {
    deactivateTabs();
    tab.setAttribute('aria-selected', 'true');

    // Show respective tab's panel
    const id = tab.getAttribute('aria-controls');
    document.getElementById(id).removeAttribute('hidden');
  }
  initLanguageTabs();
})();
        </script>
       </body>
       
  </body>
</html>